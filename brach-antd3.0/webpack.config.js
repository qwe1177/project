const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清除编译文件
const NODE_ENV = process.env.NODE_ENV || 'development'
const BUILD_PATH = 'dist';


const vendors = [
    'babel-polyfill', //ie9以及以上浏览量中支持promise等异步流程处理API
    'react',
    'react-dom',
    'react-redux',
    'redux',
    'redux-thunk',
    'axios',
    'lodash',
];


//var entries = getEntries('src/**/index.js');  //编译所有页面
var  entries = getEntries('src/home/srm/index.js'); //编译首页
entries.push(getEntries('src/allClue/index.js')[0]);  
//entries.push(getEntries('src/clientFollowUp/toFollowUp/index.js')[0]);
//entries.push(getEntries('src/productpricing/upload/index.js')[0]);



// entries.push(getEntries('src/qualitycontrol/tosubmit/index.js')[0]);  //编译提交品控
// entries.push(getEntries('src/qualitycontrol/retosubmit/index.js')[0]);  //编译重新提交品控


 entries.push(getEntries('src/allClue/index.js')[0]);  //全部的线索
 entries.push(getEntries('src/myClue/index.js')[0]);  //我的线索
 entries.push(getEntries('src/publicClue/index.js')[0]);  //公海线索
 entries.push(getEntries('src/underlingClue/index.js')[0]);  //下属的线索

 entries.push(getEntries('src/newClue/index.js')[0]);  //新建线索
 entries.push(getEntries('src/editClue/index.js')[0]);  //编辑线索
 entries.push(getEntries('src/myClueDetail/index.js')[0]);  //我的线索
 entries.push(getEntries('src/underlingClueDetail/index.js')[0]);  //下属的线索
 entries.push(getEntries('src/publicClueDetail/index.js')[0]);  //公海的线索

// entries.push(getEntries('src/suppliermanage/underlingsupplierdetail/index.js')[0]);  //下属的供应商详情
// entries.push(getEntries('src/suppliermanage/mysupplierdetail/index.js')[0]);  //我的供应商详情
// entries.push(getEntries('src/suppliermanage/inseasupplierdetail/index.js')[0]);  //公海的供应商详情

//entries.push(getEntries('src/suppliermanage/allsupplier/index.js')[0]);  //编译全部供应商
//entries.push(getEntries('src/suppliermanage/inseasupplier/index.js')[0]);  //编译公海供应商
//entries.push(getEntries('src/suppliermanage/mysupplier/index.js')[0]);  //编译我的供应商
//entries.push(getEntries('src/suppliermanage/underlingsupplier/index.js')[0]);  //编译下属供应商
// entries.push(getEntries('src/suppliermanage/modifysupplier/index.js')[0]); //编辑供应商

// entries.push(getEntries('src/suppliercertification/audit/index.js')[0]);
// entries.push(getEntries('src/suppliercertification/qualityadopt/index.js')[0]);
// entries.push(getEntries('src/suppliercertification/suppliercancel/index.js')[0]);
// entries.push(getEntries('src/suppliercertification/supplierlook/index.js')[0]);
// entries.push(getEntries('src/suppliercertification/supplierrefuse/index.js')[0]);
// entries.push(getEntries('src/suppliercertification/tobeaudited/index.js')[0]);
// entries.push(getEntries('src/suppliercertification/updateinfo/index.js')[0]);

// entries.push(getEntries('src/clientFollowUp/myFollowUp/index.js')[0]); //我的跟进
// entries.push(getEntries('src/clientFollowUp/followUp/index.js')[0]); //下属的跟进
// entries.push(getEntries('src//clientFollowUp/allFollowUp/index.js')[0]); //全部跟进




const __DEV__ = NODE_ENV === 'development';
const __PROD__ = NODE_ENV === 'production';
const conftilte = config.title;
const confName = config.globalName;
const extractCSS = new ExtractTextPlugin(__PROD__ ? "statics/css/[name].[chunkhash:6].css" : "[name].[chunkhash:6].css");

const webpackConfig = {
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],//为了减少搜索我们直接写明node_modules的全路径
        // mainFields: ['jsnext:main','main']            //这样就可以优化支持tree-shaking的库 ,部分库更新导致找不到文件，暂停这个优化
    },
    entry: {},
    output: {
        path: path.resolve(__dirname, './' + BUILD_PATH + '/'),
        publicPath: '/',
        filename: __PROD__ ? 'statics/js/[name].[chunkhash:6].js' : '[name].[chunkhash:6].js'
    },
    devtool: 'source-map',

    devServer: {
        compress: true,
        inline: true,
        port: 8181,
        proxy: {
            "/api": {
                target: "http://localhost:3333",
                pathRewrite: {"^/api": ""}
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                include: [
                    // 只去解析运行目录下的 src
                    path.resolve(__dirname, "src")
                ],
                use: [{
                    loader: 'babel-loader?cacheDirectory=true'
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)$/,
                // 图片加载器，较小的图片转成base64
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: __PROD__ ? 'statics/images/[name].[ext]?[hash:7]' : '[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    plugins: [
        // 提取公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: ['commons', 'vendors'], // 公共模块的名称
            //chunks: '',  // chunks是需要提取的模块
            minChunks: 2

        }),

        //提取样式
        extractCSS
    ],
};


//生产环境
if (__PROD__) {
    webpackConfig.stats = {
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
        assets: false
    },
        webpackConfig.plugins = webpackConfig.plugins.concat([
            new CleanWebpackPlugin([BUILD_PATH],
                {
                    root: __dirname,
                    verbose: true,
                    dry: false
                }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                // 最紧凑的输出
                beautify: false,
                // 删除所有的注释
                comments: false,
                compress: {
                    // 在UglifyJs删除没有用到的代码时不输出警告
                    warnings: false,
                    // 删除所有的 `console` 语句
                    // 还可以兼容ie浏览器
                    drop_console: true,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true,
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new webpack.optimize.OccurrenceOrderPlugin(true)
        ]);
}

// 获取指定路径下的入口文件
function getEntries(globPath) {
    const files = glob.sync(globPath);
    const reg = /(reducers|actions|sagas)/; //过滤掉redux结构目录中的index.js
    return files.filter((i) => !reg.test(i))
}

webpackConfig.entry['vendors'] = vendors; //公共文件单独注册一个vendors的入口文件


entries.forEach(function (name) {
    const path = name.replace(/^src\/(.*\/).*$/g, '$1');
    const newname = name.replace(/^src\/(.*)\/.*$/g, '$1').replace(/\//g, '-');
    webpackConfig.entry[newname] = './' + name;
    const plugin = new HtmlWebpackPlugin({
        title: conftilte[newname] ? `${conftilte[newname]}-${confName}` : `${confName}`,
        filename: path + 'index.html',
        template: './src/index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        chunks: ['commons', 'vendors', newname]
    });
    webpackConfig.plugins.push(plugin);
})

module.exports = webpackConfig;

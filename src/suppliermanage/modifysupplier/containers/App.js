import React, {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import actions from '../actions'
import moment from 'moment'
import qs from 'qs';
import Modalmodel  from '../components/Modalmodel'
import * as config  from '../../../util/connectConfig'
import {connect_srm}  from '../../../util/connectConfig'
import { getLoginInfo ,getUrlParams,getOneUrlParams} from '../../../util/baseTool';
import _ from 'lodash';

import {
    Form,
    Icon,
    Input,
    Button,
    Select,
    Row,
    Col,
    Radio,
    Cascader,
    Upload,
    Table,
    Popconfirm,
    Modal,
    DatePicker,
    message,
} from 'antd'
import 'antd/dist/antd.css'
import '../css/css.css'
const FormItem = Form.Item
const Option = Select.Option
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const RangePicker = DatePicker.RangePicker;

import axios from '../../../util/axios';


import CategorySelector from '../../../components/business/categoryselector/index';
import BrandSelector from '../../../components/business/brandselector/index';


class UserForm extends Component {

    constructor(props) {
        super(props);

        this.columns = [{
            title: (<div><em style={{color:'#ff0000',marginRight:'5px'}}>*</em>姓名</div>),
            dataIndex: 'fullname',
            render: this.addinputdata,
            width: 115,
        }, {
            title: '性别',
            className: 'column-money',
            dataIndex: 'gender',
            render: this.addselectdata,
            width: 85,
        }, {
            title: (<div><em style={{color:'#ff0000',marginRight:'5px'}}>*</em>手机</div>),
            dataIndex: 'mobile',
            render: this.addinputdata,
            width: 115,
        },
            {
                title: '固话',
                dataIndex: 'telephone',
                render: this.addinputdata,
                width: 115,
            },
            {
                title: '职位',
                dataIndex: 'position',
                render: this.addinputdata,
                width: 115,
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                render: this.addbirthday,
                width: 115,

            },
            {
                title: '邮箱',
                dataIndex: 'email',
                render: this.addinputdata,
                width: 115,
            },
            {
                title: '传真',
                dataIndex: 'fax',
                render: this.addinputdata,
                width: 115,
            },
            {
                title: '旺旺',
                dataIndex: 'wangwang',
                render: this.addinputdata,
                width: 115,
            },
            {
                title: 'QQ',
                dataIndex: 'qq',
                render: this.addinputdata,
                width: 105,
            },
            {
                title: '微信',
                dataIndex: 'weixin',
                render: this.addinputdata,
                width: 105,
            },
            {
                title: '备注',
                dataIndex: 'remark',
                render: this.addinputdata,
            },
            {
                title: '操作',
                width: 60,
                dataIndex: 'del',
                render: (text, record, index) => {
                    return (
                        this.props.tablemodel.data.length > 1 ?
                            (
                                <div><a onClick={this.Modalshow(index)}>{text}</a>
                                </div>) : null
                    );
                },
            }];

        this.columns2 = [{
            title: '序号',
            dataIndex: 'No',
            width: 50,
            render: text=>text,
        }, {
            title: '品牌名称',
            className: 'column-money',
            dataIndex: 'brankName',
            width: 160,
            render: this.addinputdata,
        }, {
            title: '品牌类型',
            dataIndex: 'brankType',
            render: this.addselectdata1,
            width: 160,
        },
            {
                title: '授权书',
                dataIndex: 'authorization',
                render: this.adduploaddata,
                width: 160,
            },
            {
                title: '注册证',
                dataIndex: 'registration',
                render: this.adduploaddata,
                width: 160,
            },
            {
                title: '认证报告',
                dataIndex: 'certification',
                render: this.adduploaddata,
                width: 160,

            },
            {
                title: '其他资料',
                dataIndex: 'otherAptitude',
                render: this.adduploaddata,
                width: 160,
            },
            {
                title: '操作',
                width: 60,
                dataIndex: 'Operation',
                render: (text, record, index) => {
                    return (
                        this.props.tablemodel2.data2.length > 1 ?
                            (
                                <div><a onClick={this.Modalshow2(index)}>{text}</a>
                                </div>) : null
                    );
                },
            }];

        this.cttextcolumns = [{
            title: '名称',
            dataIndex: 'companyName',
        }, {
            title: '类型',
            dataIndex: 'conflictType',
        }, {
            title: '冲突内容',
            dataIndex: 'conflict',
        }, {
            title: '操作',
            dataIndex: 'Operation',
            render: v=>'',
        }];


    }

    handleOpenChoose = () => {
        this.setState({brandSelectorVisible: true});
    }
    handleOpenChooseForCategory = () => {
        this.setState({categorySelectorVisible: true});
    }
    handleChoosed = (ids, labels) => {
        this.props.form.setFieldsValue({mainBrand: labels, mainBrandId: ids});
        this.setState({brandSelectorVisible: false});
    }
    handleCancel = () => {
        this.setState({brandSelectorVisible: false});
    }
    handleChoosedForCategory = (ids, labels) => {
        this.props.form.setFieldsValue({varietyName: labels, varietyId: ids});
        this.setState({categorySelectorVisible: false});
    }
    handleCancelForCategory = () => {
        this.setState({categorySelectorVisible: false});
    }
    getLastSelectBrand = () => {
        var labelstr = this.props.form.getFieldValue('mainBrand');
        var idstr = this.props.form.getFieldValue('mainBrandId');
        return {labelstr, idstr}
    }
    getLastSelectCategory = () => {
        var idstr = this.props.form.getFieldValue('varietyId');
        return idstr;
    }


    state = {
        numb1: {len: 0, color: ''},
        numb2: {len: 0, color: ''},
        numb3: {len: 0, color: ''},
        brandSelectorVisible: false,
        categorySelectorVisible: false
    }


    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload(file) {
        const reg = /jpeg|jpg|png|gif/;
        const isimgtype = reg.test(file.type);
        if (!isimgtype) {
            message.error('上传图片类型不符合！');
        }
        const isLt4M = file.size / 1024 / 1024 < 4;
        if (!isLt4M) {
            message.error('图片大小超过4M！');
        }
        return isimgtype && isLt4M;
    }

    onRemovehanddle = (name)=>(file)=> {
        var filevalue = file.url ? file.url.replace(/.*.com/g, '') : file.response.key
        const key = this.props.form.getFieldValue([name])
        var keyarr = key.split('@').filter(v=>v != filevalue)
        this.props.form.setFieldsValue({[name]: keyarr.join('@')});
    }


    telphonevalid = (rule, value, callback)=> {
        const reg = /^1\d{10}$/;
        if (!reg.test(value)) {
            callback('请输入正确的手机号码')
        } else {
            callback()
        }
    }


    uploadhandleChange = (name)=>(info) => {
        if (info.file.status === 'uploading') {
            this.getBase64(info.file.originFileObj, imageUrl => this.props.baseInfoForm({
                [name]: {
                    name: name,
                    value: imageUrl
                }
            }));
        }
    }

    hasErrors = (fieldsError)=>Object.keys(fieldsError).some(field => fieldsError[field]);


    addinputdata = ({name, message, placeholder = '', initialValue = '', required = false, type = 'string',}) => (
        <FormItem style={{width: '100%'}} {...{
            ...this.formItemLayout, ...{
                wrapperCol: {
                    span: 24,
                }
            }
        }}>
            {this.props.form.getFieldDecorator(name, {
                rules: [{required: required, message: message, type: type}, {
                    validator: name.match(/^mobile/g) ? this.telphonevalid : null,
                }], initialValue: initialValue,
                onChange: name.match(/^remark/g) ? this.companyIntroductionHandle(name, 30) : null,
            })(
                <Input placeholder={placeholder} style={{width: '100%'}}/>
            )}
        </FormItem>)
    addselectdata1 = ({ name, message, placeholder = '',initialValue = '' }) => (<FormItem>
        {this.props.form.getFieldDecorator(name, {
            rules: [{ required: false, message: message }],initialValue: initialValue
        })(
            <Select style={{ width: 160 }} placeholder="请选择">
                {this.props.Infos.category?this.props.Infos.category.map((o)=>{
                    return <Option key={o.cid} value={o.cid+''}>{o.c_name}</Option>
                }):''}
            </Select>
            )}
    </FormItem>)
    addbirthday = ({name, message, initialValue = null, placeholder = '',}) => (<FormItem style={{width:'100%'}} {...{
        ...this.formItemLayout, ...{
            wrapperCol: {
                span: 24,
            }
        }
    }}>
        {this.props.form.getFieldDecorator(name, {
            rules: [{required: false, message: message,}], initialValue: initialValue
        })(
            <DatePicker placeholder={placeholder} style={{width:'100%'}}/>
        )}
    </FormItem>)


    addselectdata = ({name, message, initialValue = undefined, placeholder = ''}) => (
        <FormItem style={{width:'100%'}} {...{
            ...this.formItemLayout, ...{
                wrapperCol: {
                    span: 24,
                }
            }
        }}>
            {this.props.form.getFieldDecorator(name, {
                rules: [{required: false, message: message}], initialValue: initialValue
            })(
                <Select style={{ width: '100%'}} placeholder="请选择">
                    <Option value="男">男</Option>
                    <Option value="女">女</Option>
                </Select>
            )}
        </FormItem>)

    adduploaddata = ({name, message, initialValue = [], placeholder = '', num = 1}) => {
        const newname = name.replace(/(.*?)s(\d+)$/g, '$1$2')
        return (<FormItem style={{width:'100%'}} {...{
            ...this.formItemLayout, ...{
                wrapperCol: {
                    span: 24,
                }
            }
        }}>
            {this.props.form.getFieldDecorator(name, {
                rules: [{required: false, message: message}],
                onChange: this.uploadonChange,
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
                initialValue: initialValue,
            })(
                <Upload {...this.uploadsprops2} beforeUpload={this.beforeUpload} listType="picture-card" disabled onRemove={this.handleOnRemove} >
                    {this.uploadicon(name, num)}
                </Upload>
            )}


        </FormItem>)
    }


    handleAdd = () => {
        const {count, data} = this.props.tablemodel;
        const newData = {
            key: count + '',
            fullname: {name: 'fullname' + count, message: '请输入姓名', placeholder: '姓名', required: true},
            gender: {name: 'gender' + count, message: '请选择性别', placeholder: '性别',},
            mobile: {name: 'mobile' + count, message: '请输入手机', placeholder: '手机', required: true},
            telephone: {name: 'telephone' + count, message: '请输入固话', placeholder: '固话',},
            position: {name: 'position' + count, message: '请输入职位', placeholder: '职位',},
            birthday: {name: 'birthday' + count, message: '请输入生日', placeholder: '生日',},
            email: {name: 'email' + count, message: '请输入邮箱', placeholder: '邮箱', required: false, type: 'email',},
            fax: {name: 'fax' + count, message: '请输入传真', placeholder: '传真',},
            wangwang: {name: 'wangwang' + count, message: '请输入旺旺', placeholder: '旺旺',},
            qq: {name: 'qq' + count, message: '请输入QQ', placeholder: 'QQ',},
            weixin: {name: 'weixin' + count, message: '请输入微信', placeholder: '微信',},
            remark: {name: 'remark' + count, message: '请输入备注', placeholder: '备注',},
            del: '删除',
        };

        this.props.tablemodelaction({data: [...data, newData], count: count + 1,})
    }

    handleAdd2 = () => {
        const {count, data2} = this.props.tablemodel2;
        const newData = {
            key: count + '',
            No: count + '',
            brankName: {name: 'brankName' + count, message: '请输入品牌名称', placeholder: '品牌名称',},
            brankType: {name: 'brankType' + count, message: '请输入品牌类型', placeholder: '品牌类型',},
            authorization: {name: 'authorization' + count, message: '请上传授权书', placeholder: '授权书',},
            registration: {name: 'registration' + count, message: '请上传注册证', placeholder: '注册证',},
            certification: {name: 'certification' + count, message: '请上传认证报告', placeholder: '认证报告',},
            otherAptitude: {name: 'otherAptitude' + count, message: '请上传其他资料', placeholder: '其他资料', num: 3,},
            Operation: '删除',
        };

        this.props.tablemodelaction2({data2: [...data2, newData], count: count + 1,})
    }


    Modalshow = (index)=>()=> {
        this.props.modalmodelaction({visible: true,})
        this.props.tablemodelaction({delkey: index,})
    }
    Modalshow2 = (index)=>()=> {
        this.props.modalmodelaction({visible2: true,})
        this.props.tablemodelaction2({delkey2: index,})
    }
    ModalhandleOk = ()=> {
        const data = [...this.props.tablemodel.data];
        const delkey = this.props.tablemodel.delkey;
        data.splice(delkey, 1);
        this.props.modalmodelaction({ModalText: '删除中···', confirmLoading: true,})
        setTimeout(() => {
            this.props.tablemodelaction({data: data,});
            this.props.modalmodelaction({
                visible: false,
                confirmLoading: false,
            });

        }, 500);
    }

    ModalhandleOk2 = ()=> {
        const data2 = [...this.props.tablemodel2.data2];
        const delkey2 = this.props.tablemodel2.delkey2;
        data2.splice(delkey2, 1);
        this.props.modalmodelaction({ModalText: '删除中···', confirmLoading: true,})
        setTimeout(() => {
            this.props.tablemodelaction2({data2: data2,});
            this.props.modalmodelaction({
                visible2: false,
                confirmLoading: false,
            });

        }, 500);
    }
    ModalhandleCancel = (value) =>()=> {
        this.props.modalmodelaction({[value]: false})
    }


    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.props.baseInfoForm({name: {name: name, value: value}})
    }

    handleChange = (value) => {
        //this.props.baseInfoForm({[name]: {name: name, value: value}})
        console.log(value)
    }


    formItemLayout = {
        labelCol: {span: 5},
        wrapperCol: {span: 19}
    }

    formItemLayout2 = {
        labelCol: {span: 0},
        wrapperCol: {span: 24}
    }


    fileListhanddle = (list)=> {
        return list ? list.split('@').map((v, i)=>({
            uid: i,
            name: `${i}.png`,
            status: 'done',
            url: `//img.csc86.com${v}`,
        })) : []
    }


    componentDidMount() {
        var moduleUrl = location.pathname;
        var supplierId = getOneUrlParams("supplierId");
        axios.get(`${connect_srm}/clue/viewSupplierClueInfo.do`, {
            params: {
                supplierId,moduleUrl
            }
        }).then(response => {
            if (response.status == 200) {
                if (response.data.code == 1) {

                    const {
                        companyName, varietyId, varietyName, cscAccount, buy5jAccount, source, partnership, isAddSku, enterpriseType,
                        website, goods, shopsite, mainBrand, mainBrandId, mainBusiness, orOut, remarkbase, address, creditNumber,
                        organization, corporation, corporationGender, idcard, oem, manage, model, regmoney, employees, turnover,
                        introduce, deadline, idcards, license, qualification, authorizationBus, undertaking, officespace, workshop,
                        brankList, contactsList, harea, province, city, hvenue, hfloor, hdistrict, submitOk, supplierId, provincebase,
                        citybase, countybase, townbase
                    } = response.data.data

                    var newdeadline =[];
                    if(deadline !=''){
                        newdeadline = deadline.split(',');
                        newdeadline = newdeadline.length ? [moment(newdeadline[0]), moment(newdeadline[1])] : [];
                    }

                    var newbrankList = brankList.map(v=> {

                        return ({
                            key: v.key,
                            No: v.key,
                            brankName: {
                                name: `brankName${v.key}`,
                                initialValue: v.brankName,
                                message: '请输入品牌名称',
                                placeholder: '品牌名称',
                            },
                            brankType: {
                                name: `brankType${v.key}`,
                                initialValue: v.brankType,
                                message: '请输入品牌类型',
                                placeholder: '品牌类型',
                            },
                            authorization: {
                                name: `authorization${v.key}`,
                                initialValue: this.fileListhanddle(v.authorization),
                                message: '请上传授权书',
                                placeholder: '授权书',

                            },
                            registration: {
                                name: `registration${v.key}`,
                                initialValue: this.fileListhanddle(v.registration),
                                message: '请输入注册证',
                                placeholder: '注册证',

                            },
                            certification: {
                                name: `certification${v.key}`,
                                initialValue: this.fileListhanddle(v.certification),
                                message: '请输入认证报告',
                                placeholder: '认证报告',

                            },
                            otherAptitude: {
                                name: `otherAptitude${v.key}`,
                                initialValue: this.fileListhanddle(v.otherAptitude),
                                message: '请输入其他资料',
                                placeholder: '其他资料',
                                num: 3,
                            },
                            Operation: '删除',
                        })
                    })


                    this.props.tablemodelaction2({data2: newbrankList, count: newbrankList.length + 1,})

                    this.props.baseInfoForm({supplierId: supplierId})
                    var newcontactsList = contactsList.map(v=> {

                        return ({
                            key: v.key,
                            fullname: {
                                name: `fullname${v.key}`,
                                initialValue: v.fullname,
                                message: '请输入姓名',
                                placeholder: '姓名',
                                required: true,
                            },
                            gender: {
                                name: `gender${v.key}`,
                                initialValue: v.gender,
                                message: '请输入性别',
                                placeholder: '性别',
                            },
                            mobile: {
                                name: `mobile${v.key}`,
                                initialValue: v.mobile,
                                message: '请输入手机',
                                placeholder: '手机',
                                required: true,
                            },
                            telephone: {
                                name: `telephone${v.key}`,
                                initialValue: v.telephone,
                                message: '请输入固话',
                                placeholder: '固话',
                            },
                            position: {
                                name: `position${v.key}`,
                                initialValue: v.position,
                                message: '请输入职位',
                                placeholder: '职位',
                            },
                            birthday: {
                                name: `birthday${v.key}`,
                                initialValue: v.birthday ? moment(v.birthday) : null,
                                message: '请输入生日',
                                placeholder: '生日',
                            },
                            email: {
                                name: `email${v.key}`,
                                initialValue: v.email,
                                message: '请输入邮箱',
                                placeholder: '邮箱',
                                required: false,
                                type: 'email',
                            },
                            fax: {name: `fax${v.key}`, initialValue: v.fax, message: '请输入传真', placeholder: '传真',},
                            wangwang: {
                                name: `wangwang${v.key}`,
                                initialValue: v.wangwang,
                                message: '请输入旺旺',
                                placeholder: '旺旺',
                            },
                            qq: {name: `qq${v.key}`, initialValue: v.qq, message: '请输入QQ', placeholder: 'QQ',},
                            weixin: {
                                name: `weixin${v.key}`,
                                initialValue: v.weixin,
                                message: '请输入微信',
                                placeholder: '微信',
                            },
                            remark: {
                                name: `remark${v.key}`,
                                initialValue: v.remark,
                                message: '请输入备注',
                                placeholder: '备注',
                            },
                            del: '删除',
                        })
                    })

                    if (submitOk) {
                        this.isajaxpost = false
                    }
                    this.props.tablemodelaction({data: newcontactsList, count: newcontactsList.length + 1,})

                    // this.props.tablemodelaction2({data2: newbrankList, count: newbrankList.length + 1,})

                    this.setState({
                        numb1: {len: mainBusiness.length, color: ''},
                        numb2: {len: remarkbase.length, color: ''},
                        numb3: {len: introduce.length, color: ''}
                    })

                    var newidcards = this.fileListhanddle(idcards)
                    var newlicense = this.fileListhanddle(license)
                    var newqualification = this.fileListhanddle(qualification)
                    var newauthorizationBus = this.fileListhanddle(authorizationBus)
                    var newundertaking = this.fileListhanddle(undertaking)
                    var newofficespace = this.fileListhanddle(officespace)
                    var newworkshop = this.fileListhanddle(workshop)

                    var allcitys = {}
                    var allcitysarr = [['Harea', harea], ['Hvenue', hvenue], ['Hfloor', hfloor], ['Hdistrict', hdistrict], ['provincebase', provincebase], ['citybase', citybase], ['countybase', countybase], ['townbase', townbase]]

                    var allcitysarrlen = allcitysarr.length
                    for (let i = 0; i < allcitysarrlen; i++) {

                        if (allcitysarr[i][1]) {
                            allcitys[allcitysarr[i][0]] = {
                                name: allcitysarr[i][0],
                                value: {key: allcitysarr[i][1], label: allcitysarr[i][1]}
                            }
                        }
                    }

                    this.props.baseInfoForm(allcitys)

                    this.props.form.setFieldsValue({
                        companyName,
                        varietyId,
                        varietyName,
                        cscAccount,
                        buy5jAccount,
                        source,
                        partnership,
                        isAddSku,
                        enterpriseType,
                        website,
                        goods,
                        shopsite,
                        mainBrand,
                        mainBrandId,
                        mainBusiness,
                        orOut,
                        remarkbase,
                        address,
                        creditNumber,
                        organization,
                        corporation,
                        corporationGender,
                        idcard,
                        oem,
                        manage,
                        model,
                        regmoney,
                        employees,
                        turnover,
                        introduce,
                        deadline: newdeadline,
                        idcards: newidcards,
                        license: newlicense,
                        qualification: newqualification,
                        authorizationBus: newauthorizationBus,
                        undertaking: newundertaking,
                        officespace: newofficespace,
                        workshop: newworkshop,
                        province: {key: province},
                        city: {key: city},
                    })
                } else {

                }
            }
        })


        //this.props.fetchPosts('categoryChild')
        this.props.fetchzonesPosts({
            url: `${connect_srm}/clue/getZone.do`,
            name: 'id',
            value: '',
            returnName: 'provinces'
        })
        this.props.fetchzonesPosts({
            url: `${connect_srm}/clue/getArea.do`,
            name: 'id',
            value: '',
            returnName: 'Hareas'
        })
        this.props.fetchCategory();
    }


    componentDidUpdate(nextProps, nextState) {

    }

    ajaxpost = false
    isajaxpost = true


    objToarrsort = (obj)=> {
        var arr = [], arr2 = [], newarr;
        for (let i in obj) {
            if (i.match(/\d+$/g)) {
                arr.push([i, obj[i]]);
            } else {
                arr2.push([i, obj[i]]);
            }
        }

        arr.sort((a, b)=>a[0].match(/\d+$/g).join('') * 1 - b[0].match(/\d+$/g).join('') * 1)

        console.log(arr)
        console.log(arr2)
        newarr = [...arr, ...arr2]
        return newarr;
    }

    objTodata = (obj)=> {
        const arr = []
        for (let o in obj) {
            if (obj[o]) {
                arr.push(o + '=' + obj[o])
            }
        }
        return arr.join('&')
    }

    handleSubmit = (e) => {
        typeof e == 'object' && e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(values)
            if (!err) {

                const params = {}
                const newarrobj = this.objToarrsort(values)
                console.log(newarrobj)
                const newarrobjlen = newarrobj.length

                for (let i = 0; i < newarrobjlen; i++) {

                    const re = /\d+$/g;
                    const arr0 = newarrobj[i][0]
                    const arr1 = newarrobj[i][1]
                    if (re.test(arr0)) {
                        const key = arr0.replace(/(.*)\d+/, '$1')
                        if (Reflect.has(params, key)) {
                            params[key].push(arr1)
                        } else {
                            params[key] = []
                            params[key].push(arr1)
                        }

                    } else {
                        params[arr0] = arr1
                    }


                }

                console.log(params)

                var newparams = {}
                for (let o in params) {
                    if (typeof params[o] === 'object') {
                        if (params[o].constructor === Array) {
                            if (o == 'deadline') {
                                newparams[o] = params[o].map(v=>v ? v.format("YYYY-MM-DD") : '').join(',')
                            } else if (o == 'birthday') {
                                newparams[o] = params[o].map(v=>v ? v.format("YYYY-MM-DD") : '').join(',')
                            } else if (typeof params[o][0] == 'object' && params[o][0] && params[o][0].status) {
                                newparams[o] = params[o].map(v=>(v.response ? v.response.key : v.url).replace(/.*com/g, '')).join('@')
                            } else if (typeof params[o][0] == 'object' && params[o][0].constructor == Array && params[o][0][0] && params[o][0][0].status) {
                                newparams[o] = params[o].map(v=>v.map(k=>(k.response ? k.response.key : k.url).replace(/.*com/g, '')).join('@')).join(',')
                            } else {
                                newparams[o] = params[o].join(',')
                            }
                        } else {
                            newparams[o] = params[o].label
                        }
                    } else {
                        if (params[o]) {
                            newparams[o] = params[o]
                        }else if(params[o]==''){
                            newparams[o] = params[o]
                        }
                    }
                }

                console.log(newparams)
                //只提交基础信息和联系人资料和企业规模
                var filteFields= ['supplierId','companyName','varietyName','varietyId','cscAccount','buy5jAccount','source','partnership','isAddSku',
                'enterpriseType','website','goods','shopsite','mainBrandId','mainBrand','orOut','address','mainBusiness','remarkbase',
                'fullname','gender','mobile','telephone','position','birthday','email','fax','wangwang','qq','weixin','remark'
                ,'oem','manage','model','regmoney','employees','turnover','introduce'];
                newparams =_.pick(newparams,filteFields);
                if(!this.isajaxpost){
                    newparams['submitOk'] = 'ok';  //如果默认检测名字通过， 给submitOk OK
                }
                typeof e == 'string' && (()=>newparams[e] = 'ok')(); //点击确认冲突提示时候加入 submitOk OK
                // const data = this.objTodata(newparams)
                newparams['moduleUrl'] = location.pathname;
                newparams['supplierId'] = getOneUrlParams("supplierId");

                var data = qs.stringify(newparams);
                axios.post(`${connect_srm}/management/editorialSupplier.do`, data)
                    .then(response=> {
                        const code = response.data.code
                        if (code == 2) {
                            this.props.modalmodelaction({submitVisible: true,})
                            this.props.tablemodelaction4({
                                data4: response.data.data,
                                count: response.data.data.length
                            })
                        } else if (code == 0) {
                            message.error(`${response.data.msg}`);
                        } else if (code == 1) {
                            message.success(`${response.data.msg}`);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


            }
        });
    }


    jcbuttion = () => {
        this.ajaxpost = true
        this.props.form.validateFieldsAndScroll(['companyName'], {force: true},
            (err) => {
                if (err) {
                    return false;
                }
            },
        );

    }

    conpanynamechange = ()=> {
        this.isajaxpost = true;
    }

    CompanyNamehandle = (rule, value, callback) => {
        const userNameres1 = /^[^\s]+$/g, userNameres2 = /.{20,}/g;
        if (!userNameres1.test(value)) {
            this.ajaxpost = false;
            callback('请输入企业名称')
        } else if (userNameres2.test(value)) {
            this.ajaxpost = false;
            callback('企业名称不能超过20个字符')
        } else if (this.ajaxpost) {
            this.props.baseInfoForm({jsbutton: true})
            axios.get(`${connect_srm}/clue/checkCompanyName.do`, {
                params: {
                    companyName: value,
                    supplierId: this.props.Infos.supplierId || ''
                }
            }).then(response => {
                if (response.status == 200) {
                    this.isajaxpost = false
                    if (response.data.code == 2) {

                        this.props.modalmodelaction({jsbuttionVisible: true,})
                        this.props.tablemodelaction3({
                            data3: response.data.data,
                            count: response.data.data.length
                        })
                        callback()
                    } else if (response.data.code == 0) {
                        callback(response.data.msg)
                    } else {
                        callback()
                    }
                } else {
                    callback()
                }
                this.props.baseInfoForm({jsbutton: false})
                this.ajaxpost = false;

            })
        } else if (this.isajaxpost) {
            callback('企业名称还未检测！')
        } else {
            callback()
        }
    }


    bindinghandle = (name) => (rule, value, callback) => {
        const reg = /^\s*$/g;
        if (value && !reg.test(value)) {
            axios.get(`${connect_srm}/clue/checkAccount.do`, {
                params: {
                    [name]: value,
                    supplierId: this.props.Infos.supplierId || ''
                }
            }).then(response => {
                if (response.status == 200) {
                    if (response.data.code == 0) {
                        callback(response.data.msg)
                    } else if (response.data.code == 1) {
                        callback()
                    }
                } else {
                    callback()
                }
            })
        } else {
            callback()
        }

    }


    normFile = (e) => {

        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }


    handlePreview = (file) => {

        this.props.modalmodelaction({
            previewVisible: true,
            previewImage: file.url || file.thumbUrl,
        });

    }


    handleCancel2 = (visible) =>() => this.props.modalmodelaction({[visible]: false,})

    handleOk2 = (visible) =>() => {
        this.props.modalmodelaction({[visible]: false,});
        this.handleSubmit('submitOk')
    }


    uploadsprops2 = {
        name: 'Filedata',
        listType: 'picture',
        className: 'upload-list-inline',
        onPreview: this.handlePreview,
        multiple: true,
        accept: 'image/*',
        action: `${config.connect_img}/upload?type=approveLicensePic`,
    }


    uploadonChange = (info)=> {
        const status = info.file.status;
        const response = info.file.response;
        if (status !== 'uploading') {
        }
        if (status === 'done') {
            message.success(`${info.file.name} 图片上传成功.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} 图片上传失败.`);
        }
    }

    provincehandle = (name, returnName)=>(value)=> {
        const url = this.props.Infos.orOut.value == 2 ? `${connect_srm}/clue/getZone.do` : `${connect_srm}/clue/getArea.do`
        this.props.fetchzonesPosts({url, name, value: value['key'], returnName})
    }

     companyIntroductionHandle = (n, v)=>(e)=> {
        const {value} = e.target;
        var len = value.length
        const reg = new RegExp('(.{' + v + '}).*', 'g');
        var color = ''
        if (len > v) {
            e.target.value = e.target.value.replace(reg, '$1');
            len = v
            color = "#ff0000";
        }
        this.setState({[n]: {len: len, color: color}})
    }

    uploadIcon = (<Icon type="plus" className="avatar-uploader-trigger"
                        style={{border: '1px dashed #d9d9d9',cursor: 'pointer','borderRadius': '6px'}}/>)

    uploadicon = (id, num, ic = this.uploadIcon)=>
        this.props.form.getFieldValue(id) && this.props.form.getFieldValue(id).length >= num ? null : ic

    handleOnRemove =(e)=>{
        return;
    }
    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const {data} = this.props.tablemodel;
        const {data2} = this.props.tablemodel2;
        const columns = this.columns;
        const columns2 = this.columns2;

        const {
            categoryChild, jsbutton, provincebase, provinces, citybase, citys, countybase, countys, townbase, towns, Harea, Hareas, Hvenue, Hvenues, Hfloor, Hfloors, Hdistrict, Hdistricts, registAddressCitys,
            deadline
        } = this.props.Infos;
        const categorysarr = categoryChild ? categoryChild.map((v, i, a)=>(
            <Option key={v['cid']}>{v['c_name']}</Option>)) : []
        const provincesarr = provinces ? provinces.map((v, i, a)=>(<Option key={v['id']}>{v['name']}</Option>)) : []
        const citysarr = citys ? citys.map((v, i, a)=>(<Option key={v['id']}>{v['name']}</Option>)) : []
        const countysarr = countys ? countys.map((v, i, a)=>(<Option key={v['id']}>{v['name']}</Option>)) : []
        const townsarr = towns ? towns.map((v, i, a)=>(<Option key={v['id']}>{v['name']}</Option>)) : []

        const Hareasarr = Hareas ? Hareas.map((v, i, a)=>(<Option key={v['id']}>{v['name']}</Option>)) : []
        const Hvenuesarr = Hvenues ? Hvenues.map((v, i, a)=>(<Option key={v['id']}>{v['name']}</Option>)) : []
        const Hfloorsarr = Hfloors ? Hfloors.map((v, i, a)=>(<Option key={v['id']}>{v['name']}</Option>)) : []
        const Hdistrictsarr = Hdistricts ? Hdistricts.map((v, i, a)=>(<Option key={v['id']}>{v['name']}</Option>)) : []

        const registAddressCitysarr = registAddressCitys ? registAddressCitys.map((v, i, a)=>(
            <Option key={v['id']}>{v['name']}</Option>)) : []
        const provinceText = provincebase ? provincebase.value ? provincebase.value.label ? provincebase.value.label + ' ' : '' : '' : '';
        const cityText = citybase ? citybase.value ? citybase.value.label ? citybase.value.label + ' ' : '' : '' : '';
        const countyText = countybase ? countybase.value ? countybase.value.label ? countybase.value.label + ' ' : '' : '' : '';
        const townText = townbase ? townbase.value ? townbase.value.label ? townbase.value.label + ' ' : '' : '' : '';

        const HareaText = Harea ? Harea.value ? Harea.value.label ? Harea.value.label + ' ' : '' : '' : '';
        const HvenueText = Hvenue ? Hvenue.value ? Hvenue.value.label ? Hvenue.value.label + ' ' : '' : '' : '';
        const HfloorText = Hfloor ? Hfloor.value ? Hfloor.value.label ? Hfloor.value.label + ' ' : '' : '' : '';
        const HdistrictText = Hdistrict ? Hdistrict.value ? Hdistrict.value.label ? Hdistrict.value.label + ' ' : '' : '' : '';

        const orOutval = this.props.Infos.orOut.value

        const addressText1 = provinceText + cityText + countyText + townText
        const addressText2 = HareaText + HvenueText + HfloorText + HdistrictText
        const addressText = orOutval == 2 ? addressText1 : addressText2

        const choosedKeys1 = this.getLastSelectCategory();
        const choosedKeys = this.getLastSelectBrand();

        const ssqx = orOutval == 2 ? (<FormItem
            label=""  {...{
            ...this.formItemLayout, ...{
                wrapperCol: {
                    span: 19,
                    offset: 5
                }
            }
        }} style={{"width":"100%",'marginTop':'5px'}} colon={false}
        >
            {getFieldDecorator('provincebase', {
                rules: [{required: false, message: '请选择省'}],
                initialValue: this.props.Infos.provincebase ? this.props.Infos.provincebase : undefined
            })(
                <Select labelInValue style={{"width":"23%","marginRight":"5px"}}
                        placeholder="请选择省"
                        onChange={this.provincehandle('id','citys')}>
                    {provincesarr}
                </Select>
            )}

            {getFieldDecorator('citybase', {
                rules: [{required: false, message: '请选择市'}],
            })(
                <Select labelInValue style={{"width":"23%","marginRight":"5px"}}
                        placeholder="请选择市"
                        onChange={this.provincehandle('id','countys')}>
                    {citysarr}
                </Select>
            )}

            {getFieldDecorator('countybase', {
                rules: [{required: false, message: '请选择镇'}],
            })(
                <Select labelInValue style={{"width":"23%","marginRight":"5px"}}
                        placeholder="请选择镇"
                        onChange={this.provincehandle('id','towns')}>
                    {countysarr}
                </Select>
            )}

            {getFieldDecorator('townbase', {
                rules: [{required: false, message: '请选择县'}],
            })(
                <Select labelInValue style={{"width":"23%","marginRight":"5px"}}
                        placeholder="请选择县">
                    {townsarr}
                </Select>
            )}
        </FormItem>) : (<FormItem
            label=""  {...{
            ...this.formItemLayout, ...{
                wrapperCol: {
                    span: 19,
                    offset: 5
                }
            }
        }} style={{"width":"100%",'marginTop':'5px'}} colon={false}
        >

            {getFieldDecorator('Harea', {
                rules: [{required: false, message: '请选择市'}],
            })(
                <Select labelInValue style={{"width":"23%","marginRight":"5px"}}
                        placeholder="请选择市"
                        onChange={this.provincehandle('cityId','Hvenues')}>
                    {Hareasarr}
                </Select>
            )}

            {getFieldDecorator('Hvenue', {
                rules: [{required: false, message: '请选择广场'}],
            })(
                <Select labelInValue style={{"width":"23%","marginRight":"5px"}}
                        placeholder="请选择广场"
                        onChange={this.provincehandle('venueId','Hfloors')}>
                    {Hvenuesarr}
                </Select>
            )}

            {getFieldDecorator('Hfloor', {
                rules: [{required: false, message: '请选择楼层'}],
            })(
                <Select labelInValue style={{"width":"23%","marginRight":"5px"}}
                        placeholder="请选择楼层"
                        onChange={this.provincehandle('floorId','Hdistricts')}>
                    {Hfloorsarr}
                </Select>
            )}

            {getFieldDecorator('Hdistrict', {
                rules: [{required: false, message: '请选择区号'}],
            })(
                <Select labelInValue style={{"width":"23%","marginRight":"5px"}}
                        placeholder="请选择区号">
                    {Hdistrictsarr}
                </Select>
            )}
        </FormItem>)

        const cttext = <div>
            <p style={{textAlign:'left',padding:'10px 0px'}}>
                您添加的线索可能与以下{this.props.tablemodel3.count}个企业的资料冲突,请确认是否继续添加</p>
            <Table
                columns={this.cttextcolumns}
                pagination={false}
                dataSource={this.props.tablemodel3.data3}
                bordered
            />
            <p><Button type="primary" style={{marginTop:'20px'}}
                       onClick={this.handleCancel2('jsbuttionVisible')}>确认添加</Button></p>
        </div>

        const ct2text = <div>
            <p style={{textAlign:'left',padding:'10px 0px'}}>
                您添加的线索可能与以下{this.props.tablemodel4.count}个企业的资料冲突,请确认是否继续添加</p>
            <Table
                columns={this.cttextcolumns}
                pagination={false}
                dataSource={this.props.tablemodel4.data4}
                bordered
            />

        </div>

        return (
            <div className="newClue">
                <h2>供应商编辑</h2>
                <div className="newCluewk">
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <div className="newCluewk">
                            <div className="newCluenk">
                                <div className="title">基础资料</div>
                                <div className="content">

                                    <Row style={{'padding':'8px 0px'}}>

                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <Col span={5}>
                                                <div
                                                    style={{display:'block',verticalAlign:'middle',textAlign:'right',lineHeight:'29px',fontSize:'12px',paddingRight:'10px',color:'rgba(0, 0, 0, 0.85)'}}>
                                                    <em style={{color:'#ff0000',marginRight:'5px'}}>*</em>企业名称 :
                                                </div>
                                            </Col>
                                            <Col span={19}>

                                                <Col span={20} style={{paddingRight:'5px'}}>
                                                    <FormItem hasFeedback
                                                              label=""  {...this.formItemLayout2}
                                                              style={{"width":"100%"}}
                                                    >
                                                        {getFieldDecorator('companyName', {
                                                            rules: [{
                                                                validator: this.CompanyNamehandle
                                                            }], initialValue: '', onChange: this.conpanynamechange
                                                        })(
                                                            <Input
                                                                prefix={<Icon type="idcard" style={{ fontSize: 13 }} />}
                                                                placeholder="请输入企业名称"
                                                                style={{"width":"100%",}} maxLength="20"/>
                                                        )}
                                                    </FormItem>
                                                </Col>
                                                <Col span={4}>
                                                    <Button type="primary" onClick={this.jcbuttion} size="large"
                                                            style={{width: '100%'}}
                                                            disabled={jsbutton}>检测</Button>
                                                    <Modalmodel  {...{
                                                        ...this.props.modalmodel,
                                                        visible: this.props.modalmodel.jsbuttionVisible,
                                                        title: '冲突提示',
                                                        width: '650px',
                                                        style: {'maxWidth': '100%'},
                                                    }}
                                                        ModalText={cttext} footer={null}
                                                        onCancel={this.handleCancel2('jsbuttionVisible')}/>
                                                </Col>

                                            </Col>


                                        </Col>


                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="经营品类"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >

                                                {getFieldDecorator('varietyName')(
                                                    <Input onClick={this.handleOpenChooseForCategory} readOnly
                                                           placeholder="点击选择经营类目"/>
                                                )}

                                                {getFieldDecorator('varietyId')(
                                                    <Input type='hidden'/>
                                                )}

                                            </FormItem>
                                            <CategorySelector onChoosed={this.handleChoosedForCategory}
                                                              choosedKeys={choosedKeys1}
                                                              visible={this.state.categorySelectorVisible}
                                                              onCancel={this.handleCancelForCategory}
                                            />

                                        </Col>
                                    </Row>
                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <Col span={5}>
                                                <div
                                                    style={{display:'block',verticalAlign:'middle',textAlign:'right',lineHeight:'29px',fontSize:'12px',paddingRight:'10px',color:'rgba(0, 0, 0, 0.85)'}}>
                                                    绑定账号 :
                                                </div>
                                            </Col>
                                            <Col span={19}>
                                                <Col span={12}>
                                                    <Col span={8} style={{paddingRight:'5px'}}>
                                                        <Button type="primary" style={{width:'100%'}}
                                                                size="large">csc86</Button>
                                                    </Col>
                                                    <Col span={16} style={{paddingRight:'5px'}}>
                                                        <FormItem {...this.formItemLayout2} style={{"width":"100%"}}
                                                                                            hasFeedback>

                                                            {getFieldDecorator('cscAccount', {
                                                                rules: [{
                                                                    validator: this.bindinghandle('cscAccount')
                                                                }], initialValue: '', validateTrigger: 'onBlur'
                                                            })(
                                                                <Input placeholder="输入账号"
                                                                       style={{'width':'100%'}} maxLength="20" />
                                                            )}
                                                        </FormItem>
                                                    </Col>

                                                </Col>
                                                <Col span={12}>
                                                    <Col span={8} style={{paddingRight:'5px'}}>
                                                        <Button type="primary" style={{width:'100%'}}
                                                                size="large">buy5j</Button>
                                                    </Col>
                                                    <Col span={16}>
                                                        <FormItem  {...this.formItemLayout2} style={{"width":"100%"}}
                                                                                             hasFeedback>

                                                            {getFieldDecorator('buy5jAccount', {
                                                                rules: [{
                                                                    validator: this.bindinghandle('buy5jAccount')
                                                                }], initialValue: '', validateTrigger: 'onBlur'
                                                            })(
                                                                <Input placeholder="输入账号"
                                                                       style={{'width':'100%',}} maxLength="20" />
                                                            )}
                                                        </FormItem>
                                                    </Col>

                                                </Col>
                                            </Col>

                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="来源"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >

                                                {getFieldDecorator('source', {
                                                    rules: [{required: false, message: '请选择来源'}],
                                                })(
                                                    <Select style={{ width: 240 }} placeholder="请选择来源">
                                                        <Option value="自行开发">自行开发</Option>
                                                        <Option value="来电咨询">来电咨询</Option>
                                                        <Option value="网络推广">网络推广</Option>
                                                        <Option value="csc86">csc86</Option>
                                                        <Option value="buy5j">buy5j</Option>
                                                        <Option value="爬取导入">爬取导入</Option>
                                                    </Select>
                                                )}


                                            </FormItem>

                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="合作关系"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('partnership', {
                                                    rules: [{required: false, message: '请选择'}],
                                                })(
                                                    <Select style={{ width: 240 }} placeholder="请选择">
                                                        <Option value="战略合作">战略合作</Option>
                                                        <Option value="友好合作">友好合作</Option>
                                                        <Option value="普通合作">普通合作</Option>
                                                        <Option value="等待合作">等待合作</Option>
                                                    </Select>
                                                )}


                                            </FormItem>
                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="是否新增SKU"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >

                                                {getFieldDecorator('isAddSku', {
                                                    rules: [{required: false, message: '请选择'}],

                                                })(
                                                    <RadioGroup name="orSku">
                                                        <Radio value={1}>是</Radio>
                                                        <Radio value={2}>否</Radio>
                                                    </RadioGroup>
                                                )}

                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="企业性质"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('enterpriseType', {
                                                    rules: [{required: false, message: '请选择'}],
                                                })(
                                                    <Select style={{ width: 240 }} placeholder="请选择">
                                                        <Option value="一级代理商">一级代理商</Option>
                                                        <Option value="厂家">厂家</Option>
                                                        <Option value="经销商">经销商</Option>
                                                    </Select>
                                                )}


                                            </FormItem>
                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="企业网址"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('website', {
                                                    rules: [{required: false, message: '请输入网址'}],
                                                })(
                                                    <Input placeholder="请输入网址"  maxLength="60"  />
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="优势产品"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('goods', {
                                                    rules: [{required: false, message: '请填写优势产品'}],
                                                })(
                                                    <Input placeholder="请填写优势产品" maxLength="30"/>
                                                )}
                                            </FormItem>
                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="旺铺地址"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('shopsite', {
                                                    rules: [{required: false, message: '请填写旺铺地址'}],
                                                })(
                                                    <Input placeholder="请填写旺铺地址" maxLength="30" />
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="经营品牌"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('mainBrandId')(
                                                    <Input type='hidden'/>
                                                )}
                                                {getFieldDecorator('mainBrand')(
                                                    <Input onClick={this.handleOpenChoose} readOnly
                                                           placeholder="点击选择经营品牌"/>
                                                )}
                                            </FormItem>
                                            <BrandSelector onChoosed={this.handleChoosed}
                                                           visible={this.state.brandSelectorVisible}
                                                           choosedKeys={choosedKeys}
                                                           onCancel={this.handleCancel}
                                            />

                                            <FormItem
                                                label="联系地址"  {...this.formItemLayout}
                                                style={{"width":"100%",'marginTop':'5px'}}
                                            >
                                                {getFieldDecorator('orOut', {
                                                    rules: [{required: false, message: '请选择'}],
                                                    initialValue: this.props.Infos.orOut && this.props.Infos.orOut.value
                                                })(
                                                    <RadioGroup>
                                                        <Radio value={'1'}>城内</Radio>
                                                        <Radio value={'2'}>城外</Radio>
                                                    </RadioGroup>
                                                )}
                                            </FormItem>
                                            {ssqx}
                                            <FormItem
                                                label=""  {...{
                                                ...this.formItemLayout, ...{
                                                    wrapperCol: {
                                                        span: 19,
                                                        offset: 5
                                                    }
                                                }
                                            }} style={{"width":"100%",'marginTop':'10px'}} colon={false}
                                            >
                                                {getFieldDecorator('address', {
                                                    rules: [{required: false, message: '详细地址'}],
                                                    initialValue: this.props.Infos.address && this.props.Infos.address.value
                                                })(
                                                    <Input addonBefore={addressText} placeholder="详细地址（注意：只填写路、门号等详细地址）"
                                                    />
                                                )}
                                            </FormItem>
                                        </Col>

                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="主营业务"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >

                                                {getFieldDecorator('mainBusiness', {
                                                    rules: [{required: false, message: '请填写主营业务(50个字符)'}],
                                                    onChange: this.companyIntroductionHandle('numb1', 50)
                                                })(
                                                    <div style={{position:'relative'}}>
                                                        <Input type="textarea" rows={3} placeholder="请填写主营业务(50个字符)"
                                                               value={this.props.Infos.mainBusiness&&this.props.Infos.mainBusiness.value} maxLength="100"/>
                                                        <p style={{position:'relative',position: 'absolute',bottom: '0px',right: '0px',paddingRight:'10px',color:this.state.numb1.color,}}
                                                        >{this.state.numb1.len}/50</p>
                                                    </div>
                                                )}

                                            </FormItem>

                                            <FormItem
                                                label="备注"  {...this.formItemLayout}
                                                style={{"width":"100%",'marginTop':'15px'}}
                                            >
                                                {getFieldDecorator('remarkbase', {
                                                    rules: [{required: false, message: '请填写备注(50个字符)'}],
                                                    onChange: this.companyIntroductionHandle('numb2', 50)
                                                })(
                                                    <div style={{position:'relative'}}>
                                                        <Input type="textarea" rows={3} placeholder="请填写备注(50个字符)"
                                                               value={this.props.Infos.remarkbase&&this.props.Infos.remarkbase.value} maxLength="100"/>
                                                        <p style={{position:'relative',position: 'absolute',bottom: '0px',right: '0px',paddingRight:'10px',color:this.state.numb2.color,}}
                                                            >{this.state.numb2.len}/50</p>
                                                    </div>
                                                )}

                                            </FormItem>

                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="newCluenk">
                                <div className="title">联系人资料（手机或固话至少填写一项）</div>
                                <div className="content">
                                    <Table
                                        columns={columns}
                                        dataSource={data}
                                        pagination={false}
                                        bordered
                                        footer={() =><div style={{textAlign:'center'}}><Button className="editable-add-btn" onClick={this.handleAdd}>+添加联系人</Button></div>}
                                    />

                                    <Modalmodel  {...{...this.props.modalmodel, ModalText: '确认删除吗？'}}
                                        onOk={this.ModalhandleOk} confirmLoading={this.props.modalmodel.confirmLoading}
                                        onCancel={this.ModalhandleCancel('visible')}/>
                                </div>
                            </div>
                            <div className="newCluenk">
                                <div className="title">营业品控资料</div>
                                <div className="content">
                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="营业执照注册号"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('creditNumber', {
                                                    rules: [{required: false, message: '请输入营业执照注册号'}],
                                                })(
                                                    <Input placeholder="营业执照注册号" readOnly/>
                                                )}


                                            </FormItem>
                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="营业执照注册地"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >

                                                {getFieldDecorator('province', {
                                                    rules: [{required: false, message: '请选择省'}],
                                                })(
                                                    <Select labelInValue style={{"width":"45%","marginRight":"5px"}}
                                                            placeholder="请选择省"
                                                            onChange={this.provincehandle('id','registAddressCitys')} disabled  >
                                                        {provincesarr}
                                                    </Select>
                                                )}

                                                {getFieldDecorator('city', {
                                                    rules: [{required: false, message: '请选择市'}],
                                                })(
                                                    <Select labelInValue style={{"width":"45%","marginRight":"5px"}}
                                                            placeholder="请选择市" disabled  >
                                                        {registAddressCitysarr}
                                                    </Select>
                                                )}

                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="营业执照期限"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >

                                                {getFieldDecorator('deadline', {
                                                    rules: [{type: 'array', required: false, message: '请选择'}],
                                                })(
                                                    <RangePicker style={{"width":"65%"}} disabled />
                                                )}


                                            </FormItem>
                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="登记机构"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('organization', {
                                                    rules: [{required: false, message: '请输入登记机构'}],
                                                })(
                                                    <Input placeholder="登记机构" readOnly />
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="企业法人"  {...{...this.formItemLayout, ...{wrapperCol: {span: 19}}}}
                                                style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('corporation', {
                                                    rules: [{required: false, message: '请输入企业法人'}],
                                                })(
                                                    <Input placeholder="企业法人"
                                                           style={{width:'65%','marginRight':'10px'}} readOnly />
                                                )}
                                                {getFieldDecorator('corporationGender', {
                                                    rules: [{required: false, message: '请选择'}],
                                                    initialValue: this.props.Infos.corporationGender && this.props.Infos.corporationGender.value
                                                })(
                                                    <RadioGroup name="orwomen" disabled>
                                                        <Radio value={0}>先生</Radio>
                                                        <Radio value={1}>女士</Radio>
                                                    </RadioGroup>
                                                )}
                                            </FormItem>

                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="身份证号"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('idcard', {
                                                    rules: [{required: false, message: '请输入身份证号'}],
                                                })(
                                                    <Input placeholder="身份证号" readOnly />
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="法人身份证"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >

                                                {getFieldDecorator('idcards', {
                                                    rules: [{required: false, message: '请上传法人身份证'}],
                                                    onChange: this.uploadonChange,
                                                    valuePropName: 'fileList',
                                                    getValueFromEvent: this.normFile,

                                                })(
                                                    <Upload {...this.uploadsprops2} beforeUpload={this.beforeUpload} listType="picture-card" disabled onRemove={this.handleOnRemove}>
                                                        {this.uploadicon('idcards', 2)}
                                                    </Upload>
                                                )}


                                            </FormItem>
                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="营业执照"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('license', {
                                                    rules: [{required: false, message: '请上传'}],
                                                    onChange: this.uploadonChange,
                                                    valuePropName: 'fileList',
                                                    getValueFromEvent: this.normFile,
                                                })(
                                                    <Upload {...this.uploadsprops2} beforeUpload={this.beforeUpload} listType="picture-card" disabled onRemove={this.handleOnRemove} >
                                                        {this.uploadicon('license', 1)}
                                                    </Upload>
                                                )}

                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="一般人纳税资质"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >

                                                {getFieldDecorator('qualification', {
                                                    rules: [{required: false, message: '请上传'}],
                                                    onChange: this.uploadonChange,
                                                    valuePropName: 'fileList',
                                                    getValueFromEvent: this.normFile,
                                                })(
                                                    <Upload {...this.uploadsprops2} beforeUpload={this.beforeUpload} listType="picture-card" disabled onRemove={this.handleOnRemove}>
                                                        {this.uploadicon('qualification', 1)}
                                                    </Upload>
                                                )}

                                            </FormItem>
                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="法人授权书/代理人授权书"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >

                                                {getFieldDecorator('authorizationBus', {
                                                    rules: [{required: false, message: '请上传'}],
                                                    onChange: this.uploadonChange,
                                                    valuePropName: 'fileList',
                                                    getValueFromEvent: this.normFile,
                                                })(
                                                    <Upload {...this.uploadsprops2} beforeUpload={this.beforeUpload} listType="picture-card" disabled onRemove={this.handleOnRemove}>
                                                        {this.uploadicon('authorizationBus', 1)}
                                                    </Upload>
                                                )}

                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="廉洁承诺书"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >

                                                {getFieldDecorator('undertaking', {
                                                    rules: [{required: false, message: '请上传'}],
                                                    onChange: this.uploadonChange,
                                                    valuePropName: 'fileList',
                                                    getValueFromEvent: this.normFile,
                                                })(
                                                    <Upload {...this.uploadsprops2} beforeUpload={this.beforeUpload} listType="picture-card" disabled onRemove={this.handleOnRemove}>
                                                        {this.uploadicon('undertaking', 1)}
                                                    </Upload>
                                                )}

                                            </FormItem>
                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="办公场所"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >

                                                {getFieldDecorator('officespace', {
                                                    rules: [{required: false, message: '请上传'}],
                                                    onChange: this.uploadonChange,
                                                    valuePropName: 'fileList',
                                                    getValueFromEvent: this.normFile,

                                                })(
                                                    <Upload {...this.uploadsprops2} beforeUpload={this.beforeUpload} listType="picture-card" disabled onRemove={this.handleOnRemove}>
                                                        {this.uploadicon('officespace', 1)}
                                                    </Upload>
                                                )}

                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="生产车间/仓库"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('workshop', {
                                                    rules: [{required: false, message: '请上传'}],
                                                    onChange: this.uploadonChange,
                                                    valuePropName: 'fileList',
                                                    getValueFromEvent: this.normFile,
                                                })(
                                                    <Upload {...this.uploadsprops2} beforeUpload={this.beforeUpload}
                                                                                    multiple={true} listType="picture-card" disabled onRemove={this.handleOnRemove}>
                                                        {this.uploadicon('workshop', 3)}
                                                    </Upload>
                                                )}


                                                <Modalmodel  {...{
                                                    ...this.props.modalmodel,
                                                    visible: this.props.modalmodel.previewVisible,
                                                    title: '',
                                                    width: '650px',
                                                    style: {'maxWidth': '100%'}
                                                }} footer={null} onCancel={this.handleCancel2('previewVisible')}
                                                   ModalText={(<img alt='example' style={{ 'maxWidth': '100%' }} src={this.props.modalmodel.previewImage} />)}/>
                                            </FormItem>
                                        </Col>

                                    </Row>
                                </div>
                            </div>
                            <div className="newCluenk">
                                <div className="title">经营品牌</div>
                                <div className="content">

                                    <Table
                                        columns={columns2}
                                        pagination={false}
                                        dataSource={data2}
                                        bordered
                                        footer={() =><div style={{textAlign:'center'}}><Button className="editable-add-btn" onClick={this.handleAdd2} disabled >+添加经营品牌</Button></div>}
                                    />

                                    <Modalmodel  {...{
                                        ...this.props.modalmodel,
                                        visible: this.props.modalmodel.visible2,
                                        ModalText: '确认删除吗?',
                                    }}
                                        onOk={this.ModalhandleOk2} confirmLoading={this.props.modalmodel.confirmLoading}
                                        onCancel={this.ModalhandleCancel('visible2')}/>
                                </div>
                            </div>
                            <div className="newCluenk" style={{marginBottom: '0px'}}>
                                <div className="title">企业规模</div>
                                <div className="content">

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="支持来料加工"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('oem', {
                                                    rules: [{required: false, message: '请选择'}],
                                                    onChange: this.onChange,
                                                })(
                                                    <RadioGroup >
                                                        <Radio value={1} >支持</Radio>
                                                        <Radio value={2} >不支持</Radio>
                                                    </RadioGroup>
                                                )}

                                            </FormItem>
                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="管理体系认证"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('manage', {
                                                    rules: [{required: false, message: '请选择'}],

                                                })(
                                                    <Select style={{ width: 240 }}
                                                            placeholder="请选择" >
                                                        <Option value="ISO9000">ISO9000</Option>
                                                        <Option value="ISO9001">ISO9001</Option>
                                                        <Option value="ISO9002">ISO9002</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="经营模式"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('model', {
                                                    rules: [{required: false, message: '请选择'}],

                                                })(
                                                    <Select style={{ width: 240 }}
                                                            placeholder="请选择" >
                                                        <Option value="贸易型">贸易型</Option>
                                                        <Option value="生产型">生产型</Option>
                                                        <Option value="服务型">服务型</Option>
                                                        <Option value="招商代理">招商代理</Option>
                                                        <Option value="政府机构">政府机构</Option>
                                                        <Option value="其它">其它</Option>
                                                    </Select>
                                                )}

                                            </FormItem>
                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="注册资本"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('regmoney', {
                                                    rules: [{required: false, message: '请选择'}],

                                                })(
                                                    <Select style={{ width: 240 } }
                                                            placeholder="请选择" > 
                                                        <Option value="50万">50万</Option>
                                                        <Option value="100万">100万</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="员工数量"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('employees', {
                                                    rules: [{required: false, message: '请选择'}],

                                                })(
                                                    <Select style={{ width: 240 }}
                                                            placeholder="请选择" >
                                                        <Option value="1-50人以下">1-50人以下</Option>
                                                        <Option value="51-100人">51-100人</Option>
                                                        <Option value="101-500人">101-500人</Option>
                                                        <Option value="501-1000人">501-1000人</Option>
                                                        <Option value="1000人以上">1000人以上</Option>
                                                    </Select>
                                                )}

                                            </FormItem>
                                        </Col>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="年营业额"  {...this.formItemLayout} style={{"width":"100%"}}
                                            >
                                                {getFieldDecorator('turnover', {
                                                    rules: [{required: false, message: '请选择'}],

                                                })(
                                                    <Select style={{ width: 240 }}
                                                            placeholder="请选择" >
                                                        <Option value="人民币500万/年以下">人民币500万/年以下</Option>
                                                        <Option value="人民币501万元/年-1000万/年">人民币501万元/年-1000万/年</Option>
                                                        <Option value="人民币1001万元/年-5000万/年">人民币1001万元/年-5000万/年</Option>
                                                        <Option value="5001万/年-1亿元/年">5001万/年-1亿元/年</Option>
                                                        <Option value="人民币1亿元/年以上">人民币1亿元/年以上</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </Col>
                                    </Row>

                                    <Row style={{'padding':'8px 0px'}}>
                                        <Col span={12} style={{ textAlign: 'left' }}>
                                            <FormItem
                                                label="公司介绍"  {...this.formItemLayout}
                                                style={{"width":"100%",'marginTop':'0px'}}
                                            >
                                                {getFieldDecorator('introduce', {
                                                    rules: [{required: false, message: '请填写公司介绍(100个字符)'}],
                                                    onChange: this.companyIntroductionHandle('numb3', 100)
                                                })(
                                                    <div style={{position:'relative'}}>
                                                        <Input type="textarea" rows={3} placeholder="请填写公司介绍（100个字符）"
                                                               value={this.props.Infos.introduce&&this.props.Infos.introduce.value} maxLength="200" />
                                                        <p style={{position:'relative',position: 'absolute',bottom: '0px',right: '0px',paddingRight:'10px',color:this.state.numb3.color,}}
                                                            >{this.state.numb3.len}/100</p>
                                                    </div>
                                                )}

                                            </FormItem>
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                        </div>
                        <div className="submit">
                            <Row style={{'padding':'8px 0px'}}>
                                <FormItem>
                                    <Button style={{padding:'2px 55px'}}
                                            type="primary"
                                            htmlType="submit"
                                            disabled={this.hasErrors(getFieldsError())}
                                    >
                                        提交
                                    </Button>
                                    <Modalmodel  {...{
                                        ...this.props.modalmodel,
                                        visible: this.props.modalmodel.submitVisible,
                                        title: '冲突提示',
                                        width: '650px',
                                        style: {'maxWidth': '100%'},
                                    }}
                                        ModalText={ct2text} onCancel={this.handleCancel2('submitVisible')}
                                        onOk={this.handleOk2('submitVisible')} okText='确认提交'/>
                                </FormItem>
                            </Row>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}


export default connect(state => ({...state}), dispatch => bindActionCreators(actions, dispatch))(
    Form.create({
        mapPropsToFields(props) {
            return props.Infos
        },
        onFieldsChange(props, fields) {
            props.baseInfoForm(fields)

        },
    })(UserForm));

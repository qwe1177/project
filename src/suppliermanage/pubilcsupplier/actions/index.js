import { connect_srm } from '../../../util/connectConfig';
import { getLoginInfo ,getUrlParams} from '../../../util/baseTool';
import axios from 'axios';
import _ from 'lodash';
const xiaowenwu_url = 'http://10.10.10.114:8080/srm-app/v1';

export const GET_HEAD_FIRST = 'GET_HEAD_FIRST'  //获取公共头1的数据
export const GET_HEAD_SECOND = 'GET_HEAD_SECOND' //获取公共投2的数据
export const GET_LEFT_MENU = 'GET_LEFT_MENU' //获取左侧菜单的信息


export const INIT_QUERY = 'INIT_QUERY' //初始化查询条件 重置查询条件的时候也用这个
export const RESET_QUERY = 'RESET_QUERY' //重置查询条件
export const SET_QUERY = 'SET_QUERY' //设置查询条件

export const INIT_SUPPLIER = 'INIT_SUPPLIER' //初始化table数据
export const REQUEST_SUPPLIER = 'REQUEST_SUPPLIER' //发送查询请求 为了防止重复查询
export const RECEIVE_SUPPLIER = 'RECEIVE_SUPPLIER' //查询供应商得到结果数据
export const RECEIVE_SUPPLIER_FAIL = 'RECEIVE_SUPPLIER_FAIL' //查询供应商失败

export const CHANGE_MAIN_CHECK = 'CHANGE_MAIN_CHECK' //修改默认的选择复杂人


export const initQuery = data => ({
    type: INIT_QUERY,
    data
})

export const setQuery = data => ({
    type: SET_QUERY,
    data
})

export const resetQuery = data => ({
    type: RESET_QUERY,
    data
})


export const initSupplier = data => ({
    type: INIT_SUPPLIER,
    data
})

export const requestSupplier = data => ({
    type: REQUEST_SUPPLIER,
    data
})

export const receiveSupplier = (data) => ({
    type: RECEIVE_SUPPLIER,
    data,
})

export const receiveSupplierFail = (data) => ({
    type: RECEIVE_SUPPLIER_FAIL,
    data,
})

export const changeMainCheck = (data) => ({
    type: CHANGE_MAIN_CHECK,
    data,
})

//actionObj 表示actions所有数据
export const fetchTableDataIfNeeded = data => (dispatch, getState) => {
    if (shouldFetchTableData(getState(), data)) {
        return dispatch(fetchTableData(data))
    }
}

export const initQueryFrom = data => (dispatch, getState) => {
    return dispatch(initQuery(data))
}

export const resetQueryFrom = data => (dispatch, getState) => {
    return dispatch(resetQuery(data))
}

export const setQueryFrom = data => (dispatch, getState) => {
    return dispatch(setQuery(data))
}



//使用async/await方式
export const queryTableData = (data) => async (dispatch, getState) => {
    try {
        await dispatch(requestSupplier(data));
        var token = getLoginInfo()['token'];  //获取token　登录用
        var urlParams = getUrlParams();
        var moduleId = urlParams['moduleId']?urlParams['moduleId']:'';
        var queryform = data.queryform;
        var pagination = data.pagination;
        // var paramPagination = _.pick(pagination, ['current', 'pageSize']);  //从分页数据中拿出第几页，每页多少条
        var paramPagination = {pageSize :pagination.current,offset:pagination.pageSize};
        // var params = { ...queryform, ...paramPagination }; //查询条件和分页条件传入
        if (queryform.createdate && queryform.createdate.length > 0) {
            queryform.startTime = queryform.createdate[0].format("YYYY-MM-DD");
            queryform.endTime = queryform.createdate[1].format("YYYY-MM-DD");
        }
        if(queryform.other && queryform.other.length>0){
            var otherKeys = queryform.other;
            for (let o of otherKeys){
                queryform[o] ='yes';
            }
        }
        queryform = _.omit(queryform, ['varietyNameNames', 'mainBrandNames','createdate','other']);
        queryform = _.omitBy(queryform, _.isUndefined); //删除undefined参数
        var params = { ...queryform, ...paramPagination,token, moduleId}; //查询条件和分页条件传入
        params = {isPass:'yes',markToDistinguish:'all',  token, moduleId}; //测试用
        let res = await axios.get(xiaowenwu_url + '/management/viewSupplierList.do', { params: params,timeout: 10000 });
        return await dispatch(receiveSupplier({ tableData: res.data.data.data, pagination: { total: res.data.data.rowCount } }));
    } catch (error) {
        console.log('error: ', error)
        return await dispatch(receiveSupplierFail());
    }
}


export const initSupplierTable = data => (dispatch, getState) => {
    return dispatch(initSupplier(data))
}

export const doChangeMainCheck = data => (dispatch, getState) => {
    return dispatch(changeMainCheck(data))
}

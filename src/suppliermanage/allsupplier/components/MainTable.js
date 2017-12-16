import React from 'react';
import PropTypes from 'prop-types'
import { Table,message,Modal } from 'antd';

import './MainTable.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {queryTableData,initSupplierTable,setQueryFrom,doChangeMainCheck} from '../actions';
import { connect_srm,connect_cas  } from '../../../util/connectConfig';
import { getUrlParams,getLoginAccount,isEntryVisableByName} from '../../../util/baseTool';
import axios from 'axios';

import { fetchToHighSea,fetchSetContacts  } from '../../../components/common/publicrequest/index';

import PersonSelector from '../../../components/business/personselector';

@connect(
  state =>  ({mainQueryData: state.mainQueryData,mainTableData:state.mainTableData,power:state.power}),
  dispatch => bindActionCreators({queryTableData,setQueryFrom,doChangeMainCheck}, dispatch)
)


class MainTable extends React.Component {
  state={
    personSelectorVisible: false,  //是否显示选择人
    toHighSeaComfirmVisible:false, //是否显示弹出要引入公海框
    actionInfo:{}  //选择人之后的操作内容{name:'加入',data:[supplierId:xxx,other...]}
  }
  static propTypes = {
    tableData: PropTypes.array, //查询结果(表格数据)
    isFetching: PropTypes.bool, //是否正在查询中
    selectedList:PropTypes.array, //表格中选择多选状态
    pagination:PropTypes.object //表格中的分页
  }

  componentWillMount(){
    this.queryWithDefault();
  }
  queryWithDefault =() =>{
    var {queryform} =  this.props.mainQueryData;
    var {pagination} =  this.props.mainTableData;
    this.props.queryTableData({queryform:queryform,pagination:pagination});
  }
  handleTableChange = (pagination, filters, sorter) => {  //点击分页控件调用  比如换页或者换pageSize
    let {queryform} =  this.props.mainQueryData;
    this.props.queryTableData({queryform:queryform,pagination:pagination});
  }
  rowSelection = {  //table中的checkbox调用
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      this.props.doChangeMainCheck({selectedList:selectedRows});
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
    }),
  }
  handleRefresh = ()=>{
    let {isFetching} = this.props.mainTableData;
    if(!isFetching){
      this.queryWithDefault();
    }
  }
  handleOpenChoose = ()=>{
    var selectedList = this.props.mainTableData.selectedList;
    if(selectedList.length==0){
      message.warning('请选择要分配的供应商');
    }else{
      this.setState({ personSelectorVisible: true,actionInfo:{name:'分配',data:selectedList}});
    }
  }
  handlePersonCancel =() =>{
    this.setState({ personSelectorVisible: false});
  }
  handleRowClick =(record, index, event)=>{
    var className = event.target.getAttribute("class");
    if(className.indexOf('js-addus')==-1 && className.indexOf('js-out')==-1 && className.indexOf('js-in')==-1){
        return;
    }
    if(className.indexOf('js-addus')!=-1){ //加入我的
      var account =  getLoginAccount();
      this.handleChoosed(account.userId,account.realName,{name:'加入',data:[record]});
    }else if(className.indexOf('js-out')!=-1){ //分配
      this.setState({ personSelectorVisible: true,actionInfo:{name:'分配',data:[record]}});
    }else{ //移入
      this.doFetchToHighSea(record.supplierId);
    }
  }
  mutiFetchToHighSea =() =>{
    var selectedList = this.props.mainTableData.selectedList;
    var supplierIds  = selectedList.map((o)=>o.supplierId).toString();
    this.doFetchToHighSea(supplierIds);
  }
  openToHighSeaConfirm =()=>{
    this.setState({toHighSeaComfirmVisible:true});
  }
  handleOk =()=>{
    this.mutiFetchToHighSea();
    this.setState({toHighSeaComfirmVisible:false});
  }
  handleCancel =()=>{
    this.setState({toHighSeaComfirmVisible:false});
  }
  doFetchToHighSea =(supplierIds,messageHeader)=>{
    fetchToHighSea(supplierIds).then((res)=>{
      if(res.data.code=='1'){
        message.success('移入成功!');
        this.queryWithDefault();
      }else{
        message.error('移入失败!');
      }
    }).catch((e)=>{
      message.error('移入失败!');
    })
  }
  handleChoosed = (ids,labels,actionInfo) => {
    this.setState({ personSelectorVisible: false}); //form重绘需要重置
    var messageHeader  = actionInfo.name;
    var supplierIds  = actionInfo.data.map((o)=>o.supplierId).toString();
    var responsibleSources  = actionInfo.data.map((o)=>o.userId).toString();
    fetchSetContacts(supplierIds ,ids,labels,responsibleSources).then((res)=>{
      if(res.data.code=='1'){
        message.success(messageHeader+'成功!');
        this.queryWithDefault();
      }else{
        message.error(messageHeader+'失败!');
      }
    }).catch((e)=>{
      message.error(messageHeader+'失败!');
    })
  }
  render() {
    var urlParams = getUrlParams();
    var moduleId = urlParams['moduleId']?urlParams['moduleId']:'';
    var systemId = urlParams['systemId']?urlParams['systemId']:'';
    var hasPowerForDetail = isEntryVisableByName('列表查询',this.props.power.operate);//获取是否有进入详情页权限
    var detailUrl ='/suppliermanage/allsupplierdetail/?systemId='+systemId+'&moduleId='+moduleId+'&moduleUrl=/suppliermanage/allsupplierdetail/';

    const columns = [{
      title: '企业名称',
      dataIndex: 'companyName',
      key:'companyName',
      render: (text, record) => (
        <a href={detailUrl+'&supplierId='+record.supplierId}>{text}</a>
      )
    }, {
      title: '来源',
      dataIndex: 'source',
      key:'source'
    }
    // , {
    //   title: '级别',
    //   dataIndex: 'clueLevel',
    //   key:'clueLevel'
    // }
    , {
      title: '企业性质',
      dataIndex: 'enterpriseType',
      key:'enterpriseType'
    }, {
      title: '主营类目',
      dataIndex: 'varietyName',
      key:'varietyName'
    }, {
      title: '主营品牌',
      dataIndex: 'mainBrand',
      key:'mainBrand'
    }, {
      title: '联系人信息',
      dataIndex: 'contacts',
      key:'contacts',
      render: (text, record) => (
        <div>
          <div>{record.fullname}</div>
          <div>{record.mobile}</div>
        </div>
      )
    },{
      title: '创建时间',
      dataIndex: 'createTime1',
      key:'createTime1'
    },{
      title: '负责人',
      dataIndex: 'realName',
      key:'realName'
    }, {
      title: '操作',
      dataIndex: 'option',
      render: (text, record) => {
        if( record.userId){  //如已经选择人的直接显示人的名称
          return <span className='table-options-wrap'>
          <a href='javascript:;' className='js-out'>分配</a>
          <a href='javascript:;' className='last-link js-in'>移入</a></span>  //数据中有checked表示选中
        }else{
          return <a href='javascript:;' className='table-options-wrap js-addus'>加入我的</a>  //数据中有checked表示选中
        }
      },
      key:'option'
    }];

    const {tableData,pagination,isFetching} =this.props.mainTableData; 
    return (
      <div className='main-table'>
        <div className="tabel-extend-option"><span onClick={this.handleRefresh} className='refresh'>刷新列表</span>  
        <span onClick={this.openToHighSeaConfirm}>移入公海</span> 
        <span onClick={this.handleOpenChoose}>分配负责人</span>
         </div>
        <Table bordered columns={columns}
          rowKey={record => record.supplierId}  
          dataSource={tableData}
          pagination={pagination}
          loading={isFetching}
          onChange={this.handleTableChange}
          rowSelection={this.rowSelection}
          onRowClick = {this.handleRowClick}
        />
        <Modal
          visible={this.state.toHighSeaComfirmVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          是否将此线客户入公海?
        </Modal>
        <PersonSelector onChoosed={this.handleChoosed.bind(this)} 
        onCancel ={this.handlePersonCancel.bind(this)} 
        title={'分配负责人'} 
        visible={this.state.personSelectorVisible} 
        actionInfo={this.state.actionInfo} />
      </div>
    );
  }
}


export default MainTable;
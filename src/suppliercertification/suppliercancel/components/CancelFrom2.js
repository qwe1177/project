import React from 'react';
import './CancelFrom.css';
import { Table } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  queryTableData,
  initSupplierTable,
  setQueryFrom,
  doChangeMainCheck
} from '../actions';
import { connect_srm, connect_cas } from '../../../util/connectConfig';
import { getUrlParams, getLoginAccount, isEntryVisableByName } from '../../../util/baseTool';
import axios from 'axios';

import { fetchToHighSea, fetchSetContacts } from '../../../components/common/publicrequest/index';

import PersonSelector from '../../../components/business/personselector';

@connect(
  state => ({
    mainQueryData: state.mainQueryData,
    mainTableData: state.mainTableData,
    power: state.power
  }),
  dispatch => bindActionCreators({
    queryTableData,
    setQueryFrom,
    doChangeMainCheck
  }, dispatch)
)


class CancelFrom2 extends React.Component {
  componentWillMount() {
    this.queryWithDefault();
  }
  queryWithDefault = () => {
    var {
      queryform
    } = this.props.mainQueryData;
    var {
      pagination
    } = this.props.mainTableData;
    this.props.queryTableData({
      queryform: queryform,
      pagination: pagination
    });
  }
  handleRefresh = () => {
    let { isFetching } = this.props.mainTableData;
    if (!isFetching) {
      this.queryWithDefault();
    }
  }
  getDetailUrl = (type, supplierId, text) => {
    var urlParams = getUrlParams();
    var moduleId = urlParams['moduleId'] ? urlParams['moduleId'] : '';
    var systemId = urlParams['systemId'] ? urlParams['systemId'] : '';
    var detailUrl = '';
    if (type == 'my') {
      detailUrl = '/myClueDetail/';
    } else if (type == 'theHighSeas') {
      detailUrl = '/publicClueDetail/';
    } else if (type == 'underling') {
      detailUrl = '/underlingClueDetail/';
    }
    return detailUrl == '' ? text : <a href={detailUrl + '?systemId=' + systemId + '&moduleId=' + moduleId + '&supplierId=' + supplierId} target='_blank'>{text}</a>;
  }

  handleTableChange = (pagination, filters, sorter) => {  //点击分页控件调用  比如换页或者换pageSize
    let { queryform } = this.props.mainQueryData;
    this.props.queryTableData({ queryform: queryform, pagination: pagination });
  }

  render() {
    let urlParams = getUrlParams();
    let moduleId = urlParams['moduleId'] ? urlParams['moduleId'] : '';
    let systemId = urlParams['systemId'] ? urlParams['systemId'] : '';
    let viewUrl = '/suppliercertification/supplierlook/?systemId=' + systemId + '&moduleId=' + moduleId + '&moduleUrl=/suppliercertification/supplierlook/';
    const columns = [{
      title: '企业名称',
      dataIndex: 'companyName',
      className: 'column-money',
      render: (text, record) => {
        return this.getDetailUrl(record.type, record.supplierId, text)
      }
    },
    {
      title: '申请时间',
      dataIndex: 'createTime',
      className: 'column-money'
    },
    {
      title: '取消时间',
      dataIndex: 'updateTime',
      className: 'column-money'
    },
    {
      title: '备注',
      dataIndex: 'note',
      className: 'column-money'
    },
    {
      title: '申请人',
      dataIndex: 'realName',
      className: 'column-money'
    },
    {
      title: '操作',
      dataIndex: 'operation',
      className: 'column-money',
      render: (text, record) => {
        return <span > <a href={viewUrl + '&supplierId=' + record.supplierId}> 查看 </a></span >;
      }
    }];
    const { tableData, pagination, isFetching } = this.props.mainTableData;
    return (
      <div className="pd20" >
        <div className="tit" >
          <div className="g-fl" > <a href="javascript:;" onClick={this.handleRefresh} > 刷新 </a></div>
        </div>
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={pagination}
          onChange={this.handleTableChange}
          loading={isFetching}
          rowKey={
            record => record.id
          }
          bordered
          className="g-mt"
        />
      </div>
    )
  }
}

export default CancelFrom2;
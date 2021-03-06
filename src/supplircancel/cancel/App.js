import React, { Component } from 'react';
import './App.css';
import vueAxios from 'axios';
import 'antd/dist/antd.css';
import CancelFrom from './components/CancelFrom';
import CancelFrom2 from './components/CancelFrom2';

import {Form, Select, Input, Button, Table, Modal, Progress,Row,Col } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

const myPagination = {
	showQuickJumper: true,
	showSizeChanger: true,
	total: 1,
	showTotal: total => `共 ${total} 条`
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true, //弹层数据加载
			modalvisible:true,//弹层显示隐藏
			selectedRows:[] //
		};
	}
	
	handlemodalOk = () => {
		this.setState({ modalvisible: false });
	}
	handlemodalCancel = () => {
		this.setState({ modalvisible: false });
	}
	onMyRowClick =(record, index, event) =>{
		this.setState({ modalvisible: true });
	}
	render() {
		const CancelWrap = Form.create()(CancelFrom);
		const Cancel2Wrap= Form.create()(CancelFrom2);
		return (
			<div className="main">
				<h3 className="page-title">品控取消</h3>
				
				<div className="query-wrap">
					<CancelWrap />
				</div>
				 <div className="tabel-wrap">
					<Cancel2Wrap />
				</div>
			</div>
		);
	}
}

export default App

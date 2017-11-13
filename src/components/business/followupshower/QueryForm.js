import React from 'react';
import PropTypes from 'prop-types'

import moment from 'moment'

// import './QueryFrom.css';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, DatePicker } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker;
const CheckboxGroup = Checkbox.Group;

const checkedList = ['日常联系', '寄送样品', '询报价', '合同', '配送交货', '售后服务', '开具发票', '货到付款'];


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doDeleteFollowMessage, doFirstQueryFollow, doQueryFollow ,doModifiyFollowInfo} from './redux';

@connect(
    state => ({ followupShower: state.followupShower }),
    dispatch => bindActionCreators({ doDeleteFollowMessage, doFirstQueryFollow, doQueryFollow,doModifiyFollowInfo }, dispatch)
)


class QueryFrom extends React.Component {
	componentDidMount() {
		// To disabled submit button at the beginning.
		this.props.form.validateFields();
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				this.props.doQueryFollow({query:values,pagination:this.props.followupShower.pagination});
			}
		});
	}
	componentDidMount() {
		//setFieldsValue方法必须在getFieldDecorator之后，getFieldDecorator在render生命周期中定义id来进行表单双向绑定
		let form = this.props.followupShower.query;
		let data ={};
		for(let key in form){  //过滤空字符串
			if(form[key]!=''){
				data[key] = form[key]; 
			}
		}
		this.props.form.setFieldsValue(data);
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {  //form中的label和内容各自占用多少
			labelCol: { span: 9 },
			wrapperCol: { span: 15 },
		};
		const formItemLayout1 = {  //form中的label和内容各自占用多少
			labelCol: { span: 5 },
			wrapperCol: { span: 19 },
		};
		const formItemLayout2 = {  //form中的label和内容各自占用多少
			labelCol: { span: 12 },
			wrapperCol: { span: 12 },
		};
		const checkItemLayoutFirst = {
			labelCol: { span: 3 },
			wrapperCol: { span: 21 },
		};

		return (
			<Form layout="horizontal" onSubmit={this.handleSubmit}>
				<Row gutter={16} >
					<Col span={6}>
						<FormItem {...formItemLayout} label="跟进方式">
							{getFieldDecorator('followUpWay', { initialValue: '全部' })(
								<Select style={{ width: '100%' }}  >
									<Option value="全部">全部</Option>
									<Option value="商机">商机</Option>
									<Option value="线索">线索</Option>
								</Select>
							)}
						</FormItem>
					</Col>
					<Col span={5}>
						<FormItem {...formItemLayout2} label="是否有批注">
							{getFieldDecorator('hasComment', { initialValue: '是' })(
								<Select style={{ width: '100%' }}  >
									<Option value="是">是</Option>
									<Option value="否">否</Option>
								</Select>
							)}
						</FormItem>
					</Col>
					<Col span={10}>
						<FormItem {...formItemLayout1} label="跟进日期">
							{getFieldDecorator('followUpDate')(
								<RangePicker style={{ width: '100%' }} />
							)}
						</FormItem>
					</Col>
					<Col span={3} style={{ textAlign: 'left' }}>
						<Button size="large" type="primary" htmlType="submit" className='normal'>筛选</Button>
					</Col>
				</Row>
				<Row gutter={16} className="followType">
					<Col span={24} >
						<FormItem {...checkItemLayoutFirst} label="跟进节点" style={{ textAlign: 'left' }}>
							{getFieldDecorator('followUpNode')(
								<CheckboxGroup options={checkedList} />
							)}
						</FormItem>
					</Col>

				</Row>
			</Form>
		);
	}
}

export default QueryFrom;
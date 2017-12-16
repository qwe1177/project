import React from 'react';
import PropTypes from 'prop-types'
import { Form,  Row, Col, Button,message,Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import _ from 'lodash';



class EffectForm extends React.Component {
	static propTypes = {
		onChoosed: PropTypes.func.isRequired //查询结果(表格数据)
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				this.props.onChoosed(values.relation);
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {  //form中的label和内容各自占用多少
			labelCol: { span: 7 },
			wrapperCol: { span: 17 }
		};
		return (
			<Form layout="horizontal" onSubmit={this.handleSubmit} ref="test">
				<Row gutter={16}>
					<FormItem {...formItemLayout} label="合作关系" style={{textAlign:'center'}}>
						{getFieldDecorator('relation',{ initialValue: '等待合作' })(
							<Select  style={{ width: '80%' }}>
								<Option value="战略合作">战略合作</Option>
								<Option value="友好合作">友好合作</Option>
								<Option value="普通合作">普通合作</Option>
								<Option value="等待合作">等待合作</Option>
							</Select>
						)}
					</FormItem>

					
				</Row>
				
				<Row gutter={16}>
					<FormItem style={{textAlign:'center'}}>
						<Button type="primary" htmlType="submit" className='normal'>确认</Button>
					</FormItem>
				</Row>
			</Form>
		);
	}
}

export default EffectForm;
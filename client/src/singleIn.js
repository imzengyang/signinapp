import React, { Component } from 'react';
import {
  Form, Select, Input, Button
} from 'antd';


const FormItem = Form.Item;
const Option = Select.Option;


class SingleInApp extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetch('/signin/create',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(values) ,
        }).then(res=>res.json())
        .then(json=>{
          console.log('fetch json is',json)
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };


    return (
      <div>
        <h1>签到</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="姓名">
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: '请输入你的姓名' },
              ],
            })(
              <Input placeholder="请输入你的姓名" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="班级" hasFeedback>
            {getFieldDecorator('class', {
              rules: [
                { required: true, message: '请选择你的班级' },
              ],
            })(
              <Select placeholder="请选择你的班级">
                <Option value="自动化测试进阶">自动化测试进阶</Option>
                <Option value="产品经理">产品经理</Option>
                <Option value="基础功能测试">基础功能测试</Option>
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="上课地点" hasFeedback>
            {getFieldDecorator('location', {
              rules: [
                { required: true, message: '请选择你的上课地点' },
              ],
            })(
              <Select placeholder="请选择你的上课地点">
                <Option value="虹口区四川北路">虹口区四川北路</Option>
                <Option value="静安区静安寺">静安区静安寺</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <Button type="primary" htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const SingleInComponent = Form.create()(SingleInApp);
export default SingleInComponent;

import React from "react";
import { Form, Image, Input, Button, Checkbox, Space, Typography } from "antd";
import {
  LockOutlined,
  UnlockOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./index.css";

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">
            <Image
              className="login-box-image"
              src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
              alt="Login"
            />
            <Typography.Text className="login-box-title" underline>
              I'm already member
            </Typography.Text>
          </div>
          <Form onSubmit={this.handleSubmit} name="login-form">
            <p className="form-title">Sign up</p>
            <Form.Item
              name="userName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              rules={[
                { required: true, message: "Please confirm your Password!" },
              ]}
            >
              <Input
                prefix={<UnlockOutlined />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>

            <Form.Item>
              <Space align="center">
                <Checkbox>I agree all statements in </Checkbox>
                <Typography.Text underline>Terms of service</Typography.Text>
              </Space>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "10px" }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default NormalLoginForm;

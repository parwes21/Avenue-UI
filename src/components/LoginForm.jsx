
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../store/actions/userActions';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import 'antd/dist/reset.css';
import './../styles/login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    dispatch(loginRequest(values));
  };

  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
//   const error = useSelector((state) => state.user.error);
  const loginSuccess = useSelector((state) => state.user.loginSuccess);
  console.log(user);
  console.log(loading);
  console.log(loginSuccess);
//   username: 'emilys',
//   password: 'emilyspass',
  return (
    <div className="login-container">
      <Form
        name="login_form"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h1>Login</h1>
        <Form.Item
          name="username"
          rules={[
            {
              type: "text",
              required: false,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Login
          </Button>
        </Form.Item>
        <div className="links">
          <a href="#" className="link">Login with Fingerprint</a>
          <a href="#" className="link">Change / Forgot Password</a>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;































// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginRequest } from '../store/actions/userActions';
// import '../styles/login.css'; // Import the CSS file


// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(loginRequest({ email, password }));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default LoginForm;

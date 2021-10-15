/* eslint-disable jsx-a11y/label-has-associated-control */
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../database/config';
import '../styles/login.css';

// eslint-disable-next-line arrow-body-style
const Login = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onUserNameChange = e => {
    setUserName(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onLoginClick = async () => {
    setIsLoading(true);
    try {
      await Promise.resolve(
        signInWithEmailAndPassword(auth, userName, password)
      )
        .then(res => {
          setIsLoading(false);
          console.log(res);
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err);
        });
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-form">
      <label className="mainLabel">Social Media</label>
      <label className="secondaryLabel">
        A progressive platform for neophytes
      </label>
      <input
        className="input"
        type="text"
        placeholder="Username"
        onChange={onUserNameChange}
        value={userName}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        onChange={onPasswordChange}
        value={password}
      />
      <button className="btn-login" type="button" onClick={onLoginClick}>
        Login
      </button>
      {isLoading && <div>Loading...</div>}
      <label className="label">
        Not a member?{' '}
        <Link className="link" to="/register">
          Register here
        </Link>
      </label>
    </div>
  );
};

export default Login;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../database/config';
import '../styles/register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onNameChange = event => {
    setName(event.target.value);
  };

  const onEmailChange = event => {
    setEmail(event.target.value);
  };

  const onPasswordChange = event => {
    setPassword(event.target.value);
  };

  const onRegisterClick = async () => {
    setIsLoading(true);
    try {
      await Promise.resolve(
        createUserWithEmailAndPassword(auth, email, password)
          .then(res => {
            console.log(res);
            setIsLoading(false);
          })
          .catch(err => {
            console.log(err);
            setIsLoading(false);
          })
      );
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">
      <form>
        <div className="form-register">
          <label className="mainLabel">Social Media</label>
          <label className="secondaryLabel">
            A progressive platform for neophytes
          </label>
          <input
            className="input"
            type="text"
            placeholder="Name"
            onChange={onNameChange}
            value={name}
          />
          <input
            className="input"
            type="text"
            placeholder="Email"
            onChange={onEmailChange}
            value={email}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={onPasswordChange}
            value={password}
          />
          <button
            type="button"
            className="register-btn"
            onClick={onRegisterClick}
          >
            Register
          </button>
          {isLoading && <div>Loading...</div>}
          <div style={{ marginTop: '20px' }}>
            <label>Already a user?</label>
            <Link className="link" to="/login">
              Sign In
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

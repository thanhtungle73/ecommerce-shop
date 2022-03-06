import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import PropTypes from 'prop-types';

Login.propTypes = {
  handleClose: PropTypes.func,
};

function Login({ closeDialog = null }) {
  const dispatch = useDispatch();
  const handleFormSubmit = async (values) => {
    try {
      const resultAction = await dispatch(login(values));

      if (closeDialog) closeDialog();
    } catch (error) {
      console.log('Failed to login by: ', error);
    }
  };

  return (
    <div>
      <LoginForm formSubmit={handleFormSubmit} />
    </div>
  );
}

export default Login;

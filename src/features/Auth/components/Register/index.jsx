import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'features/Auth/userSlice';

Register.propTypes = {};

function Register({ closeDialog = null }) {
  const dispatch = useDispatch();
  const handleFormSubmit = async (values) => {
    try {
      const resultAction = await dispatch(register(values));

      if (closeDialog) closeDialog();
    } catch (error) {
      console.log('Failed to register by: ', error);
    }
  };
  return (
    <div>
      <RegisterForm formSubmit={handleFormSubmit} />
    </div>
  );
}

export default Register;

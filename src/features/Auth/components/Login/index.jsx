import { auth } from 'firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import React from 'react';
import LoginForm from '../LoginForm';
import { useSnackbar } from 'notistack';
import { StorageKeys } from 'constants';

Login.propTypes = {
  handleClose: PropTypes.func,
};

function Login({ closeDialog = null }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // Register user and save to localStorage.
  const handleFormSubmit = async (values) => {
    try {
      const { email, password } = values;
      const loginUser = await signInWithEmailAndPassword(auth, email, password);

      enqueueSnackbar('Login success', {
        variant: 'success',
      });
      localStorage.setItem(StorageKeys.TOKEN, loginUser.user.accessToken);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(loginUser.user.email));

      if (closeDialog) closeDialog();
    } catch (error) {
      enqueueSnackbar(`${error.code}`, {
        variant: 'error',
      });
    }
  };

  return (
    <div>
      <LoginForm formSubmit={handleFormSubmit} />
    </div>
  );
}

export default Login;

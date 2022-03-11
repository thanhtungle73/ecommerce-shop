import { StorageKeys } from 'constants';
import { auth } from 'firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useSnackbar } from 'notistack';
import React from 'react';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register({ closeDialog = null }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // Register user and save to localStorage.
  const handleFormSubmit = async (values) => {
    try {
      const { email, password } = values;
      const registerUser = await createUserWithEmailAndPassword(auth, email, password);

      enqueueSnackbar('Registration is successfully.', {
        variant: 'success',
      });
      localStorage.setItem(StorageKeys.TOKEN, registerUser.user.accessToken);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(registerUser.user.email));

      if (closeDialog) closeDialog();
    } catch (error) {
      console.log('Failed to register by: ', error);

      enqueueSnackbar(`${error.code}`, {
        variant: 'error',
      });
    }
  };
  return (
    <div>
      <RegisterForm formSubmit={handleFormSubmit} />
    </div>
  );
}

export default Register;

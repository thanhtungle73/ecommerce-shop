import { yupResolver } from '@hookform/resolvers/yup';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { LoadingButton } from '@mui/lab';
import { Box, Button, CircularProgress, Divider, Typography, useTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import { AUTH_TEXT_COLOR } from 'constants';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

LoginForm.propTypes = {
  formSubmit: PropTypes.func,
  onClick: PropTypes.func,
};

function LoginForm({ formSubmit }) {
  const theme = useTheme();

  const schema = yup.object({
    email: yup.string().required('Email is required').email('Invalid email address'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Please enter at least 6 characters'),
  });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const { isSubmitting } = form.formState;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ color: AUTH_TEXT_COLOR, fontSize: '0.75rem' }}>
        <Box padding={theme.spacing(6, 7.5, 0, 7.5)}>
          <Box textAlign="center">
            <Typography variant="h5" component="h2" fontWeight="600">
              Welcome To LTT Shop
            </Typography>

            <Typography component="p" m={theme.spacing(1, 0, 2, 0)} fontSize="inherit">
              Log in with email & password
            </Typography>
          </Box>

          <form onSubmit={form.handleSubmit(formSubmit)}>
            <Box mb={1.5}>
              <Typography variant="body2" mb={1} fontSize="inherit" fontWeight="500">
                Email
              </Typography>
              <InputField name="email" label="Example@mail.com" form={form} />
            </Box>

            <PasswordField name="password" label="Password" form={form} />

            <LoadingButton
              type="submit"
              fullWidth
              disabled={isSubmitting}
              sx={{
                height: theme.spacing(5.25),
                mb: theme.spacing(3),
                color: theme.palette.common.white,
                bgcolor: theme.palette.grey[900],
                textTransform: 'none',
                '&:hover': { bgcolor: theme.palette.common.black },
                '&:disabled': {
                  bgcolor: theme.palette.grey[600],
                  color: theme.palette.common.white,
                },
              }}
            >
              {isSubmitting && (
                <CircularProgress size={24} thickness={4.5} color="inherit" sx={{ mr: 1 }} />
              )}
              {isSubmitting ? 'Logging In' : 'Login'}
            </LoadingButton>

            <Divider variant="fullWidth">OR</Divider>

            <Box mt={2}>
              <Button
                fullWidth
                sx={{
                  height: theme.spacing(5.25),
                  m: theme.spacing(1, 0, 0, 0),
                  textTransform: 'none',
                  color: theme.palette.common.white,
                  bgcolor: theme.palette.primary.dark,
                  '&:hover': { bgcolor: theme.palette.primary.dark },
                }}
              >
                <FacebookOutlinedIcon sx={{ mr: 1 }} />
                Continue With Facebook
              </Button>

              <Button
                fullWidth
                sx={{
                  height: theme.spacing(5.25),
                  m: theme.spacing(1, 0, 0, 0),
                  textTransform: 'none',
                  color: theme.palette.common.white,
                  bgcolor: theme.palette.primary.light,
                  '&:hover': { bgcolor: theme.palette.primary.light },
                }}
              >
                <GoogleIcon sx={{ mr: 1 }} />
                Continue With Google
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default LoginForm;

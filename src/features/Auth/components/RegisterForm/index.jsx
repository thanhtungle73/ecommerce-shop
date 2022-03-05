import { yupResolver } from '@hookform/resolvers/yup';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { Backdrop, Box, Button, Divider, Link, Modal, Typography, useTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import { AUTH_TEXT_COLOR } from 'constants';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

RegisterForm.propTypes = {
    formSubmit: PropTypes.func,
};

function RegisterForm({ formSubmit }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const schema = yup.object({
        fullName: yup.string().required('Name is required'),
        email: yup.string().required('Email is required').email('Invalid email address'),
        password: yup.string().required('Password is required').min(6, 'Please enter at least 6 characters'),
        retypePassword: yup.string().required('Please re-type your password').min(6, 'Please enter at least 6 characters').oneOf([yup.ref('password')], 'Password must match'),
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: ''
        },
        reValidateMode: 'onSubmit',
        resolver: yupResolver(schema)
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ color: AUTH_TEXT_COLOR, fontSize: '0.75rem' }}>
                <Box padding={theme.spacing(6, 7.5, 3, 7.5)} >
                    <Box textAlign='center'>
                        <Typography variant="h5" component="h2" fontWeight='600'>
                            Create Your Account
                        </Typography>

                        <Typography
                            component="p"
                            m={theme.spacing(1, 0, 2, 0)}
                            fontSize='inherit'
                        >
                            Please fill all fields to continue
                        </Typography>
                    </Box>

                    <form onSubmit={form.handleSubmit(formSubmit)}>
                        <Box mb={1.5}>
                            <Typography
                                variant="body2"
                                mb={1}
                                fontSize='inherit'
                                fontWeight='500'
                            >
                                Full Name
                            </Typography>
                            <InputField name="fullName" label="Ralph Adwards" form={form} />
                        </Box>
                        <Box mb={1.5}>
                            <Typography
                                variant="body2"
                                mb={1}
                                fontSize='inherit'
                                fontWeight='500'
                            >
                                Email
                            </Typography>
                            <InputField name="email" label="Example@mail.com" form={form} />
                        </Box>
                        <PasswordField name="password" label="Password" form={form} />
                        <PasswordField name="retypePassword" label="Retype Password" form={form} />

                        <Button
                            type='submit'
                            fullWidth
                            sx={{
                                height: theme.spacing(5.25),
                                mb: theme.spacing(3),
                                color: theme.palette.common.white,
                                bgcolor: theme.palette.grey[900],
                                textTransform: 'none',
                                '&:hover': {
                                    bgcolor: theme.palette.common.black
                                }
                            }}
                        >
                            Create Account
                        </Button>

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
                                    '&:hover': { bgcolor: theme.palette.primary.dark }
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
                                    '&:hover': { bgcolor: theme.palette.primary.light }
                                }}
                            >
                                <GoogleIcon sx={{ mr: 1 }} />
                                Continue With Google
                            </Button>
                        </Box>
                    </form>
                </Box>

                <Box
                    component="div"
                    p={theme.spacing(2.5, 0)}
                    bgcolor={theme.palette.grey[100]}
                    textAlign='center'
                >
                    <Typography component="span" variant="body2" mr={1}>
                        Have an account with us?
                    </Typography>
                    <Link href="#" color="inherit" fontSize='0.875rem'>
                        Login
                    </Link>
                </Box>
            </Box>
        </ThemeProvider >
    );
}

export default RegisterForm;
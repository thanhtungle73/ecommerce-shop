import { yupResolver } from '@hookform/resolvers/yup';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { Backdrop, Box, Button, Divider, Link, Modal, Typography, useTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import { AUTH_TEXT_COLOR } from 'constants';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,

    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    overflow: 'hidden',
    color: AUTH_TEXT_COLOR,
    fontSize: '0.75rem'
};

LoginForm.propTypes = {
    formSubmit: PropTypes.func,
};

function LoginForm({ formSubmit }) {
    const theme = useTheme();
    const otherLoginBtn = [
        {
            name: 'Continue With Facebook',
            icon: <FacebookOutlinedIcon sx={{ mr: 1 }} />,
            bgColor: theme.palette.primary.dark
        },
        {
            name: 'Continue With Google',
            icon: <GoogleIcon sx={{ mr: 1 }} />,
            bgColor: theme.palette.primary.light
        }
    ]

    const schema = yup.object({
        email: yup.string().required('Email is required').email('Invalid email address'),
        password: yup.string().required('Password is required').min(6, 'Please enter at least 6 characters')
    });

    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        reValidateMode: 'onSubmit',
        resolver: yupResolver(schema)
    });

    return (
        <ThemeProvider theme={theme}>
            <Box component="div">
                <Modal
                    open={true}
                    //onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Box sx={style}>
                        <Box padding={theme.spacing(6, 7.5, 0, 7.5)} >
                            <Box textAlign='center'>
                                <Typography variant="h5" component="h2" fontWeight='600'>
                                    Welcome To LTT Shop
                                </Typography>

                                <Typography
                                    component="p"
                                    m={theme.spacing(1, 0, 2, 0)}
                                    fontSize='inherit'
                                >
                                    Log in with email & password
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
                                        Email
                                    </Typography>
                                    <InputField name="email" label="Example@mail.com" form={form} />
                                </Box>
                                <PasswordField name="password" label="Password" form={form} />

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
                                    Login
                                </Button>

                                <Divider variant="fullWidth">OR</Divider>

                                <Box mt={2}>
                                    {otherLoginBtn.map((button, index) => (
                                        <Button key={index}
                                            fullWidth
                                            sx={{
                                                height: theme.spacing(5.25),
                                                m: theme.spacing(1, 0, 0, 0),
                                                textTransform: 'none',
                                                color: theme.palette.common.white,
                                                bgcolor: button.bgColor,
                                                '&:hover': { bgcolor: button.bgColor }
                                            }}
                                        >
                                            {button.icon}{button.name}
                                        </Button>
                                    ))}
                                </Box>
                            </form>

                            <Box textAlign='center' m={theme.spacing(2.5, 0)}>
                                <Typography component="span" variant="body2" mr={1}>
                                    Don't have account?
                                </Typography>
                                <Link href="#" color="inherit" fontSize='0.875rem'>
                                    Sign Up
                                </Link>
                            </Box>
                        </Box>

                        <Box
                            component="div"
                            p={theme.spacing(2.5, 0)}
                            bgcolor={theme.palette.grey[100]}
                            textAlign='center'
                        >
                            <Typography component="span" variant="body2" mr={1}>
                                Forgot your password?
                            </Typography>
                            <Link href="#" color="inherit" fontSize='0.875rem'>
                                Reset It
                            </Link>
                        </Box>
                    </Box>
                </Modal>
            </Box >
        </ThemeProvider >
    );
}

export default LoginForm;
import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PasswordField from 'components/form-controls/PasswordField';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        text: {
            custom: '#2B3445'
        }
    }
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    padding: theme.spacing(6, 8, 1, 8),
    color: theme.palette.text.custom,
    fontSize: '0.75rem'
};

LoginForm.propTypes = {
    formSubmit: PropTypes.func,
};

function LoginForm({ formSubmit }) {
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
                    <Fade in={true}>
                        <Box sx={style}>
                            <Box sx={{ textAlign: 'center', }}>
                                <Typography variant="h6" component="h2" sx={{ fontWeight: '600' }}>
                                    Welcome To LTT Shop
                                </Typography>

                                <Typography sx={{ mt: 1, mb: 2, fontSize: 'inherit' }}>
                                    Log in with email & password
                                </Typography>
                            </Box>


                            <form onSubmit={form.handleSubmit(formSubmit)}>
                                <Box mb={1.5}>
                                    <Typography
                                        variant="body2"
                                        mb={1}
                                        sx={{ fontSize: 'inherit', fontWeight: '500' }}
                                    >
                                        Email
                                    </Typography>
                                    <InputField
                                        name="email"
                                        label="Example@mail.com"
                                        form={form}
                                        parentSX={
                                            {
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                                '& .MuiInput-underline:after': {
                                                    borderBottomColor: 'black',
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover fieldset': {
                                                        borderColor: 'black',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'black',
                                                    },
                                                },
                                                '& div': { height: theme.spacing(5.25) },
                                                '& input': {
                                                    fontSize: '0.875rem'
                                                }
                                            }
                                        }
                                    />
                                </Box>

                                <PasswordField
                                    name="password"
                                    label="Password"
                                    form={form}
                                    parentSX={
                                        {
                                            '& label.Mui-focused': {
                                                color: 'black',
                                            },
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: 'black',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&:hover fieldset': {
                                                    borderColor: 'black',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'black',
                                                },
                                            },
                                            '& div': { height: theme.spacing(5.25) },
                                            '& input': {
                                                fontSize: '0.875rem'
                                            }
                                        }
                                    } />

                                <Button
                                    type='submit'
                                    fullWidth
                                    sx={{
                                        height: theme.spacing(5.25),
                                        mb: theme.spacing(3),
                                        color: theme.palette.common.white,
                                        backgroundColor: theme.palette.grey[900],
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: theme.palette.common.black
                                        }
                                    }}
                                >
                                    Login
                                </Button>
                            </form>


                        </Box>
                    </Fade>
                </Modal>
            </Box >
        </ThemeProvider>

    );
}

export default LoginForm;
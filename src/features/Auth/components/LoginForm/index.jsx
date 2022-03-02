import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PasswordField from 'components/form-controls/PasswordField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
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
                        <Typography variant="h6" component="h2">
                            Welcome To LTT Shop
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Log in with email & password
                        </Typography>
                        <form onSubmit={form.handleSubmit(formSubmit)}>

                            <Typography variant="body2">Email</Typography>
                            <InputField name="email" label="Email" form={form} />

                            <PasswordField name="password" label="Password" form={form} />

                            <Button type='submit' >Login</Button>
                        </form>


                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}

export default LoginForm;
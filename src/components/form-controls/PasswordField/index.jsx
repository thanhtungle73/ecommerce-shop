import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object,
    name: PropTypes.string,
    label: PropTypes.string,
};

function PasswordField(props) {
    const { form, name, label } = props;
    const { control } = form;

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
                <>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <Typography>{label}</Typography>

                        <OutlinedInput
                            id={name}
                            error={invalid}
                            helperText={error?.message}
                            label=''
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }

                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder={label}
                        />
                    </ FormControl>
                    <FormHelperText error={invalid}>{error?.message}</FormHelperText>
                </>
            )}
        />
    );
}

export default PasswordField;
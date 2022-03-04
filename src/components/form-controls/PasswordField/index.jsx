import { useTheme } from '@emotion/react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';


PasswordField.propTypes = {
    form: PropTypes.object,
    name: PropTypes.string,
    label: PropTypes.string,
    parentSX: PropTypes.object,
};

function PasswordField(props) {
    const { form, name, label, parentSX = {} } = props;
    const { control } = form;
    const theme = useTheme();

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
                <Box
                    component="div"
                    sx={{
                        mb: theme.spacing(2),
                        fontSize: 'inherit'
                    }}>
                    <FormControl
                        variant="outlined"
                        fullWidth
                        size="small"
                        sx={
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
                                '& div': { height: '42px' },
                                '& input': {
                                    fontSize: '0.875rem'
                                }
                            }
                        }
                    >
                        <Typography mb={1} sx={{ fontSize: 'inherit', fontWeight: '500' }}>{label}</Typography>

                        <OutlinedInput
                            id={name}
                            error={invalid}
                            label=''
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                        size="small"
                                    >
                                        {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                    </IconButton>
                                </InputAdornment>
                            }

                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder="********"
                        />
                    </ FormControl>
                    <FormHelperText error={invalid}>{error?.message}</FormHelperText>
                </Box>
            )}
        />
    );
}

export default PasswordField;
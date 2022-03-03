import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object,
    name: PropTypes.string,
    label: PropTypes.string,
};

function InputField(props) {
    const { form, label, name, parentSX } = props;
    const { control } = form;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
                <TextField
                    label=''
                    variant="outlined"
                    fullWidth
                    placeholder={label}
                    helperText={error?.message}
                    error={invalid}

                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                    size="small"
                    sx={{ ...parentSX }}
                />
            )}
        />
    );
}

export default InputField;
import { TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object,
    name: PropTypes.string,
    label: PropTypes.string,
};

function InputField(props) {
    const { form, label, name } = props;
    const { control } = form;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
                <TextField
                    label=''
                    variant="outlined"
                    placeholder={label}
                    helperText={error?.message}
                    error={invalid}

                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                />
            )}
        />
    );
}

export default InputField;
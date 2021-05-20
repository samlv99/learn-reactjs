import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors } = form.formState;
    const hasError = errors[name];
    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field: { onChange, onBlur }, fieldState: {} }) => (
                <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    label={label}
                    disabled={disabled}
                    error={!!hasError}
                    helperText={errors[name]?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            )}
        />
    );
}

export default InputField;

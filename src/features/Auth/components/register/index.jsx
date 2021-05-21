import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../registerForm';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

Register.propTypes = {};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar(); 

    const handleSubmit = async (values) => {
       try {
            //auto set username = email
        values.username = values.email;

        const action = register(values);
        const resultAction = await dispatch(action);
        const user = unwrapResult(resultAction);
        console.log('New user', user);
        enqueueSnackbar('Register successfully!!!', { variant: 'success' });
       } catch (error) {
           console.log('Failed to register:', error);
       }
    };

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;
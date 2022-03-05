import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {

};

function Register(props) {
    const handleFormSubmit = (values) => {
        console.log(values);
    }
    return (
        <div>
            <RegisterForm formSubmit={handleFormSubmit} />
        </div>
    );
}

export default Register;
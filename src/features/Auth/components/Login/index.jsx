import React from 'react';
import LoginForm from '../LoginForm';

Login.propTypes = {

};

function Login(props) {
    const handleFormSubmit = (values) => {
        console.log(values);
    }
    return (
        <div>
            <LoginForm formSubmit={handleFormSubmit} />
        </div>
    );
}

export default Login;
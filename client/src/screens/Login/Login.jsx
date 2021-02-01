import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import { Button } from '@material-ui/core';

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const { username, password } = formData;
    const { handleLogin } = props;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="loginpage">
            <div className="login-text">
                <h3 className="login-header">Login to your account.</h3>
                <h6 className="register-header">Don't have one?{" "}
                <NavLink className='register-link' to='/register'>Register for an account.</NavLink>
                </h6>
            </div>
            <form className='login-form' onSubmit={(e)=> {
                e.preventDefault();
                handleLogin(formData);
            }}>
                <TextField
                    required
                    onChange={handleChange}
                    type='text'
                    name='username'
                    value={username}
                    variant='outlined'
                    label='Username'                    
                />
                <TextField
                    required
                    onChange={handleChange}
                    type='password'
                    name='password'
                    value={password}
                    variant='outlined'
                    label='Password'
                />
                <Button
                    type='submit'
                    className='submit-button'
                    variant='contained'
                    color='secondary'
                >Login</Button>
            </form>
        </div>
    )
}

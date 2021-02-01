import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import './Register.css';
import { Button } from '@material-ui/core';
import Header from '../../layouts/Header/Header';

export default function Register(props) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const {username, email, password} = formData;
    const {handleRegister} = props;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="registerpage">
            <div className="login-text">
                <h3 className="login-header">Register for a new account.</h3>
                <h6 className="register-header">Already have one?{" "}
                <NavLink className='register-link' to='/login'>Sign in.</NavLink>
                </h6>
            </div>
            <form className='register-form' onSubmit={(e)=> {
                e.preventDefault();
                handleRegister(formData);
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
                    type='text'
                    name='email'
                    value={email}
                    label='email'
                    variant='outlined'
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
                    className='register-button'
                    variant='contained'
                    color='secondary'
                    >Submit</Button>
            </form>
        </div>
    )
}

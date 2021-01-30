import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const {username, password} = formData;
    const {handleLogin } = props;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
            <form onSubmit={(e)=> {
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
            </form>
    )
}

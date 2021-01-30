import React from 'react';
import {NavLink} from 'react-router-dom';

const UserNav = (props) => {

    return (
        <div className="header">
            <div className="usernav">
                <div className="user">
                    Welcome {props.username.username}!
                </div>
                <NavLink className='profile' to='/profile'>
                    Profile
                </NavLink>
                <NavLink className='signout' to='/signout'>
                    SignOut
                </NavLink>
            </div>
        </div>
    )
}

export default UserNav;
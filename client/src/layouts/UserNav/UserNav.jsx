import React from 'react';
import {NavLink} from 'react-router-dom';
import './UserNav.css';

const UserNav = (props) => {

    return (
        <div className="navbar">
            <div className="navmenu">
                <div className="user">
                    Welcome {props.username.username}!
                </div>
                <NavLink className='allwines' to='/wines'>
                    All Wines
                </NavLink>
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
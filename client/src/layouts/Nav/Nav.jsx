import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = (props) => {

    return (
        <div className='navbar'>
            <div className='usernav'>
                <div className="navmenu">
                    <NavLink className='allwines' to='/wines'>
                        All Wines
                    </NavLink>
                    <NavLink className='navlogin' to='/login'>
                        Login
                    </NavLink>
                    <NavLink className='navregister' to='/register'>
                        Register
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Nav;
import React from 'react'
import './ProfilePage.css';
import {NavLink} from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function ProfilePage(props) {

    const { currentUser, wines } = props;
    console.log(props);



    return (
        <div className="profile-page">
            <div className="user-details">
                <h3>User Account Details</h3>
                <img src={currentUser.profile_picture} alt='' className='profile_pic' />
                <h5>{currentUser.username}</h5>
                <h5>{currentUser.email}</h5>
            </div>
            <div className="user-wine-list">
                <h5 className='wine-list'>Wine List</h5>
                
                    <Button
                    className='add_wine_button'
                    variant='contained'
                    color='secondary'
                    href='/wines/add'
                    >Add Wine</Button>
                    
                {wines.filter(wine=> {
                    return currentUser.id === wine.user_id 
                }).map(wine=> (
                    <NavLink to={`/wines/${wine.id}`}>
                        <p key={wine.id}>{wine.name}</p>
                    </NavLink>
            ))}
            </div>
            <div className="user-wish-list">
                <h5 className='wish-list'>Wine Wish List</h5>
            </div>
        </div>
    )
}

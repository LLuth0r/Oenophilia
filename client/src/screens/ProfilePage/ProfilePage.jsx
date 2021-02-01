import React from 'react'
import './ProfilePage.css';
import {NavLink} from 'react-router-dom';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

export default function ProfilePage(props) {

    const { currentUser, wines, handleDelete } = props;

    return (
        <div className="profile-page">
            <div className="user-details">
                <h3>User Account Details</h3>
                <img src={currentUser.profile_picture} alt='' className='profile_pic' />
                <h5>{currentUser.username}</h5>
                <h5>{currentUser.email}</h5>
                <h6>{currentUser.location}</h6>
            </div>
            <div className="user-wine-list">
                <h5 className='wine-list'>Wine List</h5>
                
                    <Button
                    className='add_wine_button'
                    variant='contained'
                    color='primary'
                    href='/wines/add'
                    >Add Wine</Button>

                    
                {wines.filter(wine=> {
                    return currentUser.id === wine.user_id 
                }).map(wine=> (
                        <div className='user_wines'>
                        <DeleteIcon className='delete_icon' onClick={()=> handleDelete(wine.id)}/>
                        <NavLink to={`/wine/${wine.id}/edit`}>
                        <UpdateIcon />
                        </NavLink>
                        <NavLink to={`/wine/${wine.id}`}>
                            <p className='wine' key={wine.id}>{wine.vintage} {wine.name}</p>
                        </NavLink>
                        </div>
                ))}
                    
            </div>
            <div className="user_message_list">
                <h5 className='message_list'>Messages</h5>
            </div>
        </div>
    )
}

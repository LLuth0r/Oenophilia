import React from 'react'
import './ProfilePage.css';
import {NavLink} from 'react-router-dom';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ProfilePage(props) {

    const { currentUser, wines, handleDelete } = props;
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
                    color='primary'
                    href='/wines/add'
                    >Add Wine</Button>

                    
                {wines.filter(wine=> {
                    return currentUser.id === wine.user_id 
                }).map(wine=> (
                        <div className='user_wines'>
                        <DeleteIcon onClick={handleDelete}/>
                        <NavLink to={`/wine/${wine.id}`}>
                        <p key={wine.id}>{wine.name}</p>
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

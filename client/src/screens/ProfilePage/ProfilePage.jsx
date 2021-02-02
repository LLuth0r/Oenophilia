import React from 'react'
import './ProfilePage.css';
import {NavLink} from 'react-router-dom';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

export default function ProfilePage(props) {

    const { currentUser, wines, messages, handleDelete } = props;

    return (
        <div className="profile_page">
            <div className="user_details">
                <h3 className='account_details'>User Account Details</h3>
                <img src={currentUser.profile_picture} alt='' className='profile_pic' />
                <div className="profile_info">
                    <h5>Username: {currentUser.username}</h5>
                    <h5>Email: {currentUser.email}</h5>
                    <h5>Location: {currentUser.location}</h5>
                </div>
            </div>
            <div className="user_wine_list">
                <div className='wine_list_header'>
                    <h5 className='wine_list_title'>Wine List</h5>
                    <Button
                        className='add_wine_button'
                        variant='contained'
                        color='primary'
                        href='/wines/add'
                    >Add Wine
                    </Button>
                </div>
                    
                {wines.filter(wine=> {
                    return currentUser.id === wine.user_id 
                }).map(wine=> (
                    <div className='user_wines'>
                        <DeleteIcon className='delete_icon' onClick={()=> handleDelete(wine.id)}/>
                        <NavLink to={`/wine/${wine.id}/edit`}>
                            <UpdateIcon className='update_icon'/>
                        </NavLink>
                        <NavLink to={`/wine/${wine.id}`}>
                            <p className='wine' key={wine.id}>{wine.vintage} {wine.name}</p>
                        </NavLink>
                    </div>
                ))}            
            </div>
            <div className="user_message_list">
                <h5 className='message_title'>Messages</h5>
                <div className='message_header'>
                    <div className='message_timestamp'>Date</div>
                    <div className='message_sender'>Sender</div>
                    <div className='message_subject'>Subject</div>
                </div>
                {messages.filter(message=> {
                    return currentUser.id === message.user_id 
                }).map(message=> (
                        <div className='user_messages'>
                            <DeleteIcon className='delete_icon' onClick={()=> handleDelete(message.id)}/>
                            <p className='date' key={message.id}>{message.created_at}</p>
                            <p className='sender' key={message.id}>{message.user}</p>
                            <p className='message' key={message.id}>{message.subject}</p>
                        </div>
                ))}
            </div>
        </div>
    )
}

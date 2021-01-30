import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {

    return (
        <div className="footer">
            <div className="contact-field">
                <NavLink to='/aboutMe'>
                    <h6 className="aboutMe">About Me </h6>
                </NavLink>
                <NavLink to='/contactMe'>
                    <h6 className="contactMe">Contact Me</h6>
                </NavLink>
            </div>
            <div className="iconarea">
                <LinkedInIcon className='linkedin_icon'/>
                <GitHubIcon className='github_icon'/>
            </div>
        </div>
    )
}
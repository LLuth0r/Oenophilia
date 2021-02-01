import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {

    return (
        <div className="footer">
            <div className="iconarea">
                <LinkedInIcon className='linkedin_icon'/>
                <GitHubIcon className='github_icon'/>
            </div>
        </div>
    )
}
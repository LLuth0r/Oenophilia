import React from 'react'
import red_wine from './Images/red_wine.jpg';
import white_wine from './Images/white_wine.jpg';
import champagne from './Images/champagne.jpg';
import { Link } from 'react-router-dom';
import './WineCard.css';

export default function WineCard(props) {

    return (
        <div className="cards">
            <div className="card1">
            <Link to={'/wines/red_wines'}>
                <img className='card_images' src={red_wine} alt='' />
                <h4>Red Wines</h4>
            </Link>
            </div>
            <div className="card2">
            <Link to={'/wines/white_wines'}>
                <img className='card_images' src={white_wine} alt='' />
                <h4>White Wines</h4>
            </Link>
            </div>
            <div className="card3">
            <Link to={'/wines/champagnes'}>
                <img className='card_images' src={champagne} alt='' />
                <h4>Champagnes</h4>
            </Link>
            </div>
        </div>
    )
}

import React from 'react'
import {NavLink} from 'react-router-dom';
import './Wines.css';


export default function Wines(props) {
    const { wines, currentUser } = props;



    return (
        <div className='wine_page'>
            <div className='wines_table_header'>
                <h4>Vintage</h4>
                <h4>Name</h4>
                <h4>Category</h4>
                <h4>Variety</h4>
                <h4>Price Min</h4>
                <h4>Price Max</h4>                
                <h4>Size</h4>
            </div>
            {wines.map(wine=> (
                <div className='wines' key={wine.id}>
                        <p className='vintage'>{wine.vintage}</p>
                    <NavLink to={`/wine/${wine.id}`}>
                        <p className='wine_name'>{wine.name}</p>                        
                    </NavLink>
                    <p className='category'>{wine.category}</p>
                        <p className='variety'>{wine.varietal}</p>
                        <p className='min_price'>$ {wine.price_min}</p>
                        <p className='max_price'>$ {wine.price_max}</p>
                        <p className='size'>{wine.size} mL</p>
                </div>
            ))}
        </div>
    )
}

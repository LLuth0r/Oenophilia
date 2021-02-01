import React from 'react'
import { Link } from 'react-router-dom';

export default function RedWines(props) {
    const { currentUser, wines } = props;

    return (
        <div className='red_wines'>
            {/* {wines.filter(wine=> {
                return wine.category === 'red'}).map(wine=> (
                    <Link className='card' to={`/wine/reds`}>
                    <div>Red Wine</div>   
                    </Link>             
            ))} */}
        </div>
    )
}

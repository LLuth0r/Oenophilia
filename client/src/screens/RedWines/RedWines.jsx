import React from 'react'
import { Link } from 'react-router-dom';

export default function RedWines(props) {
    const { wines } = props;

    return (
        <div className='reds'>
            {wines.filter((wine) => {
                return wine.category === 'Red'}).map((wine) => (
                    <Link className='card' to={`/wine/reds`}>
                    <div>{wine.name}</div>   
                    </Link>             
            ))}
        </div>
    )
}

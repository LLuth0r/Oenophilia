import React from 'react'
import {NavLink} from 'react-router-dom';


export default function Wines(props) {
    const { wines, currentUser } = props;


    return (
        <div className='extreme_fuckery'>
            {wines.map(wine=> (
                <React.Fragment key={wine.id}>
                    <NavLink to={`/wine/${wine.id}`}>
                        <p>{wine.name}</p>
                    </NavLink>
                </React.Fragment>
            ))}
        </div>
    )
}

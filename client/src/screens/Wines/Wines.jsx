import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Wines(props) {
    const { wines, currentUser } = props;

    return (
        <div>
            {wines.map(wine=> (
                <React.Fragment key={wine.id}>
                    <NavLink to={`/wines/${wine.id}`}>
                        <p>{wine.name}</p>
                        </NavLink>
                </React.Fragment>
            ))}
        </div>
    )
}

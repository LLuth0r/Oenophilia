import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCards.css';

export default function ProductCards(props) {
    const {wines, vineyards} = props;
    console.log(props)

    const allWines = wines.map((wine, index) => (
        <ProductCard
        _id={wine._id}
        wineName={wine.name}
        vintage={wine.vintage}
        category={wine.category}
        variety={wine.varietal}
        price_min={wine.price_min}
        price_max={wine.price_max}
        size={wine.size}
        vineyard={wine.vineyard_id}
        key={index}
        />
    ))

    return (
        <div className='container'>
            {allWines}
        </div>
    )
}

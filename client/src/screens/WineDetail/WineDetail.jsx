import { useEffect, useState } from 'react';
import { getOneWine } from '../../services/wines';
import { useParams } from 'react-router-dom';
import './WineDetail.css';


export default function WineDetail(props) {
    const [wineItem, setWineItem] = useState(null);
    const { id } = useParams();

    useEffect(()=> {
        const fetchWineItem = async () => {
            const wineData = await getOneWine(id);
            setWineItem(wineData);
        }
        fetchWineItem();
    }, [id])

    console.log(props);
    return (
        <div className='wine_details'>
            <h3>Brand: {wineItem?.name}</h3>
            <h4>Vintage: {wineItem?.vintage}</h4>
            <h4>Category: {wineItem?.category}</h4>
            <h4>Variety: {wineItem?.varietal}</h4>
            <h4>{wineItem?.size}mL</h4>
            <h6>Min. Price ${wineItem?.price_min} / Max. Price ${wineItem?.price_max}</h6>
        </div>
    )
}

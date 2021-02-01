import Header from '../../layouts/Header/Header';
import { useEffect, useState } from 'react';
import { getOneWine } from '../../services/wines';
import { useParams } from 'react-router-dom';


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
        <div>
            <h3>Brand: {wineItem?.name}</h3>
            <h4>Vintage: {wineItem?.vintage}</h4>
            <h4>Type: {wineItem?.varietal}</h4>
            <h4>{wineItem?.size}mL</h4>
            <h6>Min. Price ${wineItem?.price_min}</h6>
            <h6>Max. Price ${wineItem?.price_max}</h6>
        </div>
    )
}

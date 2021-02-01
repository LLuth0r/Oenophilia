import React from 'react'
import {useEffect, useState} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import CreateWine from '../screens/CreateWine/CreateWine';
import Wines from '../screens/Wines/Wines';
import WineDetail from '../screens/WineDetail/WineDetail';
import EditWine from '../screens/EditWine/EditWine';
import ProfilePage from '../screens/ProfilePage/ProfilePage';
import {getAllWines, postWine, putWine, deleteWine, getOneWine } from '../services/wines';
import {getAllVineyards, postVineyard, putVineyard, deleteVineyard, getOneVineyard } from '../services/vineyards';

export default function MainContainer(props) {
    const [wines, setWines] = useState([]);
    const [vineyards, setVineyards] = useState([]);
    const history = useHistory();
    const {currentUser} = props;

    useEffect(() => {
        const fetchWines = async () => {
            const wineData = await getAllWines();
            setWines(wineData)
        }
        fetchWines();
    }, []);

    useEffect(() => {
        const fetchVineyards = async () => {
            const vineyardData = await getAllVineyards();
            setVineyards(vineyardData);
        }
        fetchVineyards();
    }, []);

    const handleCreate = async (wineData) => {
        const newWine = await postWine(wineData);
        setWines(prevState => [...prevState, newWine])
        history.push('/user')
    }

    const handleDelete = async (id) => {
        await deleteWine(id);
        setWines(prevState => prevState.filter(wineItem => {
            return wineItem.id !== id
        }))
    }

    const handleUpdate = async (id, wineData) => {
        const updatedWine = await putWine(id, wineData);
        setWines(prevState => prevState.map(wineItem => {
            return wineItem.id === Number(id) ? updatedWine : wineItem
        }))
        history.push('/user')
    }


    return (
       <Switch>
           <Route exact path='/wines'>
               <Wines
                wines={wines}
                />
           </Route>
           <Route path='/wine/:id/edit'>
               <EditWine
               wines={wines}
               handleUpdate={handleUpdate}
               />
           </Route>
           <Route path='/wine/:id'>
               <WineDetail
                wines={wines}
                />
           </Route>
           <Route exact path='/wines/add'>
               <CreateWine
               handleCreate={handleCreate}
               currentUser={currentUser}
               />
           </Route>
           <Route exact path='/profile'>
               <ProfilePage
               wines={wines}
               handleDelete={handleDelete}
               currentUser={currentUser}
               />
           </Route>
       </Switch>
    )
}

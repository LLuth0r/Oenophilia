import React from 'react'
import {useEffect, useState} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import CreateWine from '../screens/CreateWine/CreateWine';
import Wines from '../screens/Wines/Wines';
import WineDetail from '../screens/WineDetail/WineDetail';
import EditWine from '../screens/EditWine/EditWine';
import ProfilePage from '../screens/ProfilePage/ProfilePage';
import {getAllWines, postWine, putWine, deleteWine } from '../services/wines';
import {getAllMessages, postMessage, deleteMessage, getOneMessage } from '../services/messages';
import {getAllVineyards, postVineyard, deleteVinyard, putVineyard} from '../services/vineyards';
import WineCard from '../components/WineCard/WineCard';
import RedWines from '../screens/RedWines/RedWines';
import WhiteWines from '../screens/WhiteWines/WhiteWines';
import Champagnes from '../screens/Champagnes/Champagnes';

export default function MainContainer(props) {
    const [wines, setWines] = useState([]);
    const [vineyards, setVineyards] = useState([]);
    const [messages, setMessages] = useState([]);
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
        const fetchMessages = async () => {
            const messageData = await getAllMessages();
            setMessages(messageData);
        }
        fetchMessages();
    }, []);

    const handleCreate = async (wineData) => {
        const newWine = await postWine(wineData);
        setWines(prevState => [...prevState, newWine])
        history.push('/profile')
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

    const handleDeleteMessage = async (id) => {
        await deleteMessage(id);
        setMessages(prevState => prevState.filter(messageItem => {
            return messageItem.id !== id
        }))
    }

    const handleCreateVineyard = async (vineyardData) => {
        const newVineyard = await postVineyard(vineyardData);
        setVineyards(prevState => [...prevState, newVineyard])
        history.push('/profile')
    }


    return (
       <Switch>
           <Route exact path='/wines'>
               <Wines
                wines={wines}
                vineyards={vineyards}
                currentUser={currentUser}
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
               handleCreateVineyard={handleCreateVineyard}
               currentUser={currentUser}
               />
           </Route>
           <Route path='/wines/white_wines'>
               <WhiteWines
               currentUser={currentUser}
               wines={wines}
               />
           </Route>
           <Route path='/wines/red_wines'>
               <RedWines
               currentUser={currentUser}
               wines={wines}
               />
           </Route>
           <Route path='/wines/champagnes'>
               <Champagnes
               currentUser={currentUser}
               wines={wines}
               />
           </Route>
           <Route exact path='/profile'>
               <ProfilePage
               wines={wines}
               messages={messages}
               handleDelete={handleDelete}
               handleDeleteMessage={handleDeleteMessage}
               currentUser={currentUser}
               />
           </Route>
           <Route path='/'>
           <WineCard />
           </Route>
       </Switch>
    )
}

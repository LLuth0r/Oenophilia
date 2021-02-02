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
import {getAllMessages, postMessage, deleteMessage, getOneMessage } from '../services/messages';
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
        const fetchVineyards = async () => {
            const vineyardData = await getAllVineyards();
            setVineyards(vineyardData);
        }
        fetchVineyards();
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

    const handleDeleteMessage = async (id) => {
        await deleteMessage(id);
        setMessages(prevState => prevState.filter(messageItem => {
            return messageItem.id !== id
        }))
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
           <Route path='/wines/white_wines'>
               <WhiteWines
               currentUser={currentUser}
               />
           </Route>
           <Route path='/wines/red_wines'>
               <RedWines
               currentUser={currentUser}
               />
           </Route>
           <Route path='/wines/champagnes'>
               <Champagnes
               currentUser={currentUser}
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

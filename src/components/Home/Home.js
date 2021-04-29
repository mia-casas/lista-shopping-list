import React, { useEffect, useState } from 'react';
import {Container} from 'reactstrap';
import ListCreate from './List/ListSetup';
import ListMap from './List/ListMap';
import ListEdit from './List/ListEdit';
import RecipeSearch from '../site/RecipeSearch';
import APIURL from '../../helpers/environment';


const HomePage = (props) => {
    const [lists, setLists] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [listToUpdate, setListToUpdate] = useState({});

    const fetchLists = () => {
        fetch(`${APIURL}/list/view`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => res.json()) 
        .then((listData) => {
            setLists(listData)
            console.log(listData)
            console.log(props.token)
        })
    }

    useEffect(() => {
        fetchLists();
    }, [])

    const editUpdateList = (list) => {
        setListToUpdate(list);
    }
    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false)
    }

    return(
        <div>
            Welcome!
            
            <ListCreate fetchLists={fetchLists} token={props.token} />
            <ListMap lists={lists} fetchLists={fetchLists} token={props.token} editUpdateList={editUpdateList} updateOn={updateOn}/>
            {updateActive ? <ListEdit listToUpdate={listToUpdate} updateOff={updateOff} token={props.token} fetchLists={fetchLists}/> : <></>}
            <br/>
            <RecipeSearch />
        </div>
    )
}

export default HomePage;
import {
    GET_ALL,
    GET_BYID,
    CREATE_ACTIVITY,
    FILTER_CONTINENT,
    FILTER_ACTIVITY,
    ORDER_BY_POPULATION,
    ORDER_ALPHABETICALLY 
} from "./types";
const axios = require('axios');



//trae todos los países o filtra por nombre
export function getAll(name){
    return async (dispatch) => {
        var response;
        if (name) response =await axios(`http://localhost:3002/countries?name=${name}`);
        else response = await axios(`http://localhost:3002/countries`);
        dispatch({
            type: GET_ALL,
            payload: response.data
        });
    }
}

//trae un país en específico
export function getbyID(id) {
    return async (dispatch) => {
        const response = await axios(`http://localhost:3002/countries/${id}`);
        dispatch({
            type: GET_BYID,
            payload: response.data
        });
    }
}

//filtra por continente
export function filterContinent(continent) {
    return async (dispatch) => {
        var response = await axios(`http://localhost:3002/countries`);
        response = response.data.filter(e => e.continent.toLowerCase() === continent.toLowerCase());
        dispatch({
            type: FILTER_CONTINENT,
            payload: response
        });
    }
}

//filtra por actividad
export function filterActivity(activity) {
    return async (dispatch) => {
        const response = await axios(`http://localhost:3002/activity/name=${activity}`);
        //data = data.filter(e => e.Activities.filter(a => a.name === activity).length);
        
        dispatch({
            type: FILTER_ACTIVITY,
            payload: response
        });
    }
}

//crea actividad
export function createActivity (activity){
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3002/activity`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {'Content-Type': 'application/json'},
         //   redirect: 'follow', // manual, *follow, error
            body: JSON.stringify(activity)
        });
        const data = await response.json();

        dispatch({
            type: CREATE_ACTIVITY,
            payload: data

        })
    }
}
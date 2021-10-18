import {
    GET_ALL,
    GET_BYID,
    CREATE_ACTIVITY,
    FILTER_CONTINENT,
    FILTER_ACTIVITY,
    ORDER_BY,
    SET_PAGE
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

//trae la lista de actividades o filtra por actividad
export function filterActivity(activity) {
    return async (dispatch) => {
        var response;
        if(activity) response = await axios(`http://localhost:3002/activity/name=${activity}`);
        else  response = await axios(`http://localhost:3002/activity`);       
        dispatch({
            type: FILTER_ACTIVITY,
            payload: response.data
        });
    }
}

//crea actividad
export function createActivity (activity){
    return async (dispatch) => {
       const response= await axios.post(`http://localhost:3002/activity`, activity);
        dispatch({
            type: CREATE_ACTIVITY,
            payload: response.data

        })
    }
}
//setea el número de página
export function setPage(n){
    return({
        type: SET_PAGE,
        payload: n
    })
}

export function orderBy(order){
    return({
        type:ORDER_BY,
        payload: order
    })
}

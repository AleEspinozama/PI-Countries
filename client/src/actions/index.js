import {
    GET_ALL,
    GET_BYID,
    FILTER_CONTINENT,
    FILTER_ACTIVITY,
    GET_ACTIVITIES,
    ORDER_BY,
    SET_PAGE,
    SHOW_LOADER,
    CLEAN_COUNTRY
} from "./types";
import axios from 'axios';



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

//trae la lista de actividades
export function getActivities() {
    return async (dispatch) => {
        var response = await axios(`http://localhost:3002/activity`);       
        dispatch({
            type: GET_ACTIVITIES,
            payload: response.data
        });
    }
}

//filtra por actividad
export function filterActivity(activity) {
    return async (dispatch) => {
        var response = await axios(`http://localhost:3002/activity?name=${activity}`);    
        dispatch({
            type: FILTER_ACTIVITY,
            payload: response.data[0].countries
        });
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

export function showLoader() {
    return({
        type:SHOW_LOADER,
    })
}

export function cleanCountry() {
    return({
        type:CLEAN_COUNTRY,
    })
}

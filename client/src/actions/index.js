import {
    GET_ALL,
    GET_BYID,
    CREATE_ACTIVITY,
    FILTER_CONTINENT,
    FILTER_ACTIVITY,
    ORDER_BY_POPULATION,
    ORDER_ALPHABETICALLY 
} from "./types";


//trae todos los países o filtra por nombre
export function getAll(name){
    return async (dispatch) => {
        const response;
        if (name) response =await fetch(`http://localhost:3002/countries?name=${name}`);
        else response = await fetch(`http://localhost:3002/countries`);
        const data = await response.json();
        dispatch({
            type: GET_ALL,
            payload: data
        });
    }
}

//trae un país en específico
export function getbyID(id) {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3002/countries/${id}`);
        const data = await response.json();
        dispatch({
            type: GET_BYID,
            payload: data
        });
    }
}

//filtra por continente
export function filterContinent(continent) {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3002/countries`);
        const data = await response.json();
        data = data.filter(e => e.continent.toLowerCase() === continent.toLowerCase());
        dispatch({
            type: FILTER_CONTINENT,
            payload: data
        });
    }
}

//filtra por actividad
export function filterActivity(activity) {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3002/activity/name=${activity}`);
        const data = await response.json();
        //data = data.filter(e => e.Activities.filter(a => a.name === activity).length);
        
        dispatch({
            type: FILTER_ACTIVITY,
            payload: data
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
import {
    GET_ALL,
    GET_BYID,
    CREATE_ACTIVITY,
    FILTER_CONTINENT,
    FILTER_ACTIVITY,
    ORDER_BY_POPULATION,
    ORDER_ALPHABETICALLY 
} from "../actions/types";

const initialState = {
    countries : [],
    country : []
}

function reducer (state = initialState, { type, payload}) {
    switch(type) {
        case GET_ALL:
            return {
                ...state,
                countries: payload
            }
        case GET_BYID:
            return {
                ...state,
                country: payload
            }
        case FILTER_CONTINENT:
            return {
                ...state,
                countries: payload
            }

        case FILTER_ACTIVITY:
            return {
                ...state,
                countries: payload
            }
        
        default:
            return state;
    }
}

export default reducer;
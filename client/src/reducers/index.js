import {
    GET_ALL,
    GET_BYID,
    CREATE_ACTIVITY,
    FILTER_CONTINENT,
    FILTER_ACTIVITY,
    ORDER_BY,
    SET_PAGE
} from "../actions/types";

const initialState = {
    countries : [],
    activities: [],
    country : [], 
    page:1
}

function reducer (state = initialState, { type, payload }) {
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

        case CREATE_ACTIVITY:
            return {
                ...state,
                // activities: activities.push(payload)
            }

        case SET_PAGE:
            return {
                ...state,
                page: payload
            }

        case ORDER_BY:
            if(payload === 'AZ') {
            return {
                ...state,
                countries: state.countries.slice().sort((a, b) => (a.name > b.name) ? 1 : -1),
              };
            }
            if(payload === 'ZA') {
                return {
                    ...state,
                    countries: state.countries.slice().sort((a, b) => (a.name < b.name) ? 1 : -1),
                  };
                }
            if(payload === 'Population-+') {
                return {
                    ...state,
                    countries: state.countries.slice().sort((a, b) => (a.population > b.population) ? 1 : -1),
                };
            }
            if(payload === 'Population+-') {
                return {
                    ...state,
                    countries: state.countries.slice().sort((a, b) => (a.population < b.population) ? 1 : -1),
                };
            }
            break;
        
        default:
            return state;
    }
}

export default reducer;
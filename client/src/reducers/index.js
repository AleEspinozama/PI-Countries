import {
    GET_ALL,
    GET_BYID,
    FILTER_CONTINENT,
    FILTER_ACTIVITY,
    ORDER_BY,
    SET_PAGE,
    GET_ACTIVITIES,
    SHOW_LOADER
} from "../actions/types";

const initialState = {
    countries : [],
    activities: [],
    country : [], 
    page:1,
    loading: false
}

function reducer (state = initialState, { type, payload }) {
    switch(type) {
        case GET_ALL:
            return {
                ...state,
                countries: payload,
                loading: false
            }
        case GET_BYID:
            return {
                ...state,
                country: payload,
                loading: false
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
            
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: payload
            }

        case SET_PAGE:
            return {
                ...state,
                page: payload
            }
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
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
import Navbar from '../Navbar/Navbar';
import Countries from '../Countries/Countries';
import Filters from '../Filters/Filters';


import { useEffect } from "react";
import { getActivities, getAll, cleanCountry } from "../../actions/index.js";
import { useDispatch, useSelector } from "react-redux";


function Home() {
    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries);

    useEffect(() => {
        if(countries.length === 0) dispatch(getAll());
        dispatch(getActivities());
        dispatch(cleanCountry());
    }, [dispatch, countries.length]);

    return (
        <div>
            <Navbar />   
            <Filters />         
            <Countries/>    
        </div>
    )
}

export default Home

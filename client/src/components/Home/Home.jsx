import Navbar from '../Navbar/Navbar';
import Countries from '../Countries/Countries';
import Filters from '../Filters/Filters';

import { useEffect } from "react";
import { getAll, getActivities } from "../../actions/index.js";
import { useDispatch } from "react-redux";




function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAll());
      dispatch(getActivities());
    }, [dispatch]);
    


    return (
        <div>
            <Navbar />   
            <Filters />         
            <Countries/>    
        </div>
    )
}

export default Home

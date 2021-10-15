import Navbar from '../Navbar/Navbar';
import { useEffect } from "react";
import Countries from '../Countries/Countries';
import Filters from '../Filters/Filters';
import { getAll } from "../../actions/index.js";
import { useDispatch } from "react-redux";

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAll());
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

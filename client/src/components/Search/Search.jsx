import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAll, setPage } from "../../actions/index.js";
import { useHistory } from 'react-router-dom';

import './Search.css';


function Search() {

    const [country, setCountry] = useState ("");
    const dispatch= useDispatch();
    let history= useHistory();


    return (
        <div>
            <form onSubmit= {(e) => {
                e.preventDefault();
                country !== ""? dispatch(getAll(country)) : alert("Enter a search")
                setCountry("");
                dispatch(setPage(1));
                history.push("/home?name=" + country);

            }}>
                <input 
                type="text" 
                placeholder="Country" 
                name="Country"
                value={country}
                onChange={e =>  {
                    setCountry(e.target.value)
                  }
                   }
                />
                <button className= "boton" >Search</button>
            </form>
        </div>
    )
}

export default Search

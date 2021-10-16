import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAll } from "../../actions/index.js";
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
                dispatch(getAll(country));
                setCountry("");
                history.push("/home");

            }}>
                <input 
                type="text" 
                placeholder="Country" 
                name="Country"
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

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { orderBy } from "../../actions/index.js";
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios';

import './addActivity.css';

function AddActivity() {

    const dispatch = useDispatch();    

    const countries = useSelector(state => state.countries);

    useEffect(() => {
       setTimeout(()=> dispatch(orderBy("AZ")), 150);
    }, [dispatch]);


    const[InputActivity, setInputActivity] = useState(
        {
            name:'',
            dificulty:'',
            duration:'',
            season:'',
            countries: []
        }
    )

    function handlerOnChange (e){
        setInputActivity({
            ...InputActivity,
            [e.target.name]:e.target.value
        })
    }

    function handleOnChangeCountry(){
        var options = document.getElementById('Country').selectedOptions;
        var valuesSelected = Array.from(options).map(({value}) => value);
        console.log(valuesSelected);

        setInputActivity({
            ...InputActivity,
            countries: valuesSelected
        })
    }

    function handleOnSubmit(e){
        e.preventDefault()
        console.log(InputActivity);
        createActivity(InputActivity);
    }

    async function createActivity(activity){
            const response= await axios.post(`http://localhost:3002/activity`, activity);
            return response;      
    }

    return (
        
            <div className="containerF">
                <form className="formulario" onSubmit={(e) => handleOnSubmit(e)}>   
                <Link to="/home" className="boton right">x</Link>
                <h1>Add Activity</h1>

                {/* Activity name */}
                    <label>Activity</label>
                    <input type="text" placeholder="Example: Dance" name="name" onChange={handlerOnChange} value={InputActivity.name}/>
                    
                {/* Dificulty */}
                <div>
                        <label>Dificulty</label>
                        <input type="number" id="dificulty" name="dificulty" min="1" max="5" defaultValue="1" onChange={handlerOnChange}/>
                    </div>
                {/* Duration */}
                    <label>Duration</label>
                    <input type="text" placeholder="Example: One night" name="duration" onChange={handlerOnChange} value={InputActivity.duration}/>

                {/* Selector de temporada */}
                    <div>
                        <label>Season</label>
                        <select name="season" id="Season" defaultValue='none' onChange={handlerOnChange}>
                            <option value="none" disabled hidden>
                                Season
                            </option>
                            <option value='Spring'>Spring</option>
                            <option value='Summer'>Summer</option>
                            <option value='Autumn'>Autumn</option>
                            <option value='Winter'>Winter</option>
                            <option value='All'>All</option>
                        </select>
                    </div>
                {/* Agregar countries */}
                    <div>            
                        <label>Countries</label>
                        <select multiple name="Country" id="Country" onChange={handleOnChangeCountry}>
                            <option value="none" defaultValue disabled hidden>
                                Countries
                            </option>
                            {
                            countries.map(c => (
                                <option value={c.ID} key={c.ID}>{c.name}</option>
                            ))
                            } 
                        </select>
                        <p>Ctrl+click for multiple</p>
                    </div>
                

                    <button type="submit" className="boton">Submit</button>
                </form>
            </div>
    )
}

export default AddActivity

import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { orderBy } from "../../actions/index.js";
import { useDispatch, useSelector } from "react-redux";

import './addActivity.css';

function AddActivity() {
    const dispatch = useDispatch();    
    const countries = useSelector(state => state.countries);
    useEffect(() => {
       setTimeout(()=> dispatch(orderBy("AZ")), 200);
    }, []);


    const[InputActivity, setInputActivity] = useState(
        {
            name:'',
            difficulty:'',
            duration:'',
            season:'',
            countries: []
        }

    )

    const[InputCountries, setInputCountries] = useState([]);

    function handlerOnChange (e){
        setInputActivity({
            ...InputActivity,
            [e.target.name]:e.target.value
        })
    }

    function addCountries(e){
        setInputActivity({
            ...InputActivity,
            countries: [...countries, e.target.value]
        })
    }

    function handleOnSubmit(e){
        e.preventDefault()
        
    }

    return (
        <div>
            {/* <Navbar />  */}
            <div>
                <form className="formulario">   
                <Link to="/home" className="boton right">x</Link>
                <h1>Add Activity</h1>

                {/* Activity name */}
                    <label>Activity</label>
                    <input type="text" placeholder="Example: Dance" name="name"/>
                    
                {/* Dificulty */}
                    <div>
                        <label>Dificulty</label>
                        <input type="radio" id="dif1" name="dificulty" value="1" />
                        <label >1</label>
                        <input type="radio" id="dif2" name="dificulty" value="2" />
                        <label >2</label>
                        <input type="radio" id="dif3" name="dificulty" value="3" />
                        <label >3</label>
                        <input type="radio" id="dif4" name="dificulty" value="4" />
                        <label >4</label>
                        <input type="radio" id="dif5" name="dificulty" value="5" />
                        <label >5</label>
                    </div>
                {/* Duration */}
                    <label>Duration</label>
                    <input type="text" placeholder="Example: One night" name="duration"/>

                {/* Selector de temporada */}
                    <div>
                        <label>Season</label>
                        <select name="Season" id="Season">
                            <option value="none" defaultValue disabled hidden>
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
                        <select multiple name="Country" id="Country" >
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
            
        </div>
    )
}

export default AddActivity

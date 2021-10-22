import { Link,  useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import { orderBy } from "../../actions/index.js";
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios';

import './addActivity.css';

function AddActivity() {

    const dispatch = useDispatch(); 
    const history = useHistory();   

//traer la lista de countries y ordenarlas alfabéticamente
    const countries = useSelector(state => state.countries);
    const activities = useSelector(state=> state.activities);

    useEffect(() => {
       setTimeout(()=> dispatch(orderBy("AZ")), 250);
    }, [dispatch]);


//estado inicial de la actividad
    const[InputActivity, setInputActivity] = useState(
        {
            name:'',
            dificulty:'1',
            duration:'',
            season:'',
            countries: []
        }
    )
    
//estado inicial de los errores
    const [errors, setErrors] = useState({});


//función asincrónica para mandar el post al servidor
    async function createActivity(activity){
        const response= await axios.post(`http://localhost:3002/activity`, activity);
        return response.data;      
}

//función para validar inputs
function validate(InputActivity) {
    let errors = {};
    if (!InputActivity.name) {
      errors.name = 'Activity name is required';
    } else{
        for(var i=0; i<activities.length; i++){
            if(activities[i].name === InputActivity.name) errors.name = 'Activity already on database';
        }
    }
  
    if(!InputActivity.duration){
      errors.duration = 'Duration is required';
    }

    if(!InputActivity.season){
        errors.season = 'Season is required';
    }

    if(InputActivity.countries.length<1){
        errors.countries = 'Please choose at least one country';
    }
  
    return errors;
  };

//manejar los cambios en los inputs
    function handlerOnChange (e){
        setInputActivity({
            ...InputActivity,
            [e.target.name]:e.target.value
        }) 
        setErrors(validate({
            ...InputActivity,
            [e.target.name]: e.target.value
          }));
    }

//manejar los cambios en el select multiple de countries
    function handleOnChangeCountry(){
        var options = document.getElementById('Country').selectedOptions;
        var valuesSelected = Array.from(options).map(({value}) => value);
        console.log(valuesSelected)

        setInputActivity({
            ...InputActivity,
            countries: valuesSelected
        })

        setErrors(validate({
            ...InputActivity,
            countries: valuesSelected
        }))
    }

//enviar la data del form al back
    function handleOnSubmit(e){
        e.preventDefault()

        if(Object.keys(errors).length !== 0) {
            alert("Please, fill all the inputs correctly");
        }
        else {
            createActivity(InputActivity);
            alert("Activity created succesfully!")

            setInputActivity({
                name:'',
                dificulty:'1',
                duration:'',
                season:'',
                countries: []
            });

            history.push("/home");
        }

    }

    return (
        
            <div className="containerF">
                <form className="formulario" onSubmit={(e) => handleOnSubmit(e)}>   
                <Link to="/home" className="boton right">x</Link>
                <h1>Add Activity</h1>

                {/* Activity name */}
                    <label>Activity</label>
                    <input type="text" placeholder="Example: Dance" name="name" onChange={handlerOnChange} value={InputActivity.name}/>
                    {errors.name && (<p className="danger">{errors.name}</p>)} 
                    
                {/* Dificulty */}
                <div>
                        <label>Dificulty</label>
                        <select type="number" name="dificulty" id="dificulty" defaultValue='1' onChange={handlerOnChange}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                {/* Duration */}
                    <label>Duration</label>
                    <input type="text" placeholder="Example: One night" name="duration" onChange={handlerOnChange} value={InputActivity.duration}/>
                    {errors.duration && (<p className="danger">{errors.duration}</p>)} 
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
                    {errors.season && (<p className="danger">{errors.season}</p>)} 
                {/* Agregar countries */}
                    <div className="c">            
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
                        <br></br>
                        <label>Ctrl+click for multiple</label>
                        {errors.countries && (<p className="danger">{errors.countries}</p>)} 
                    </div>
                    <br></br>
                

                    <button type="submit" className="boton">Submit</button>
                </form>
            </div>
    )
}

export default AddActivity

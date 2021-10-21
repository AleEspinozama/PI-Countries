import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getbyID, showLoader } from '../../actions/index';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import img404 from "../../img/404.gif"
import './CountryDetail.css';

function CountryDetail() {
    const { id:code } =useParams();
    let [id] =useState(code);
    const dispatch = useDispatch();

    const country = useSelector(state => state.country);
    const loading = useSelector(state => state.loading);

    // console.log(loading);
    // console.log(country);

    useEffect(()=>{ 
        setTimeout(()=> dispatch(getbyID(id)), 150);
        dispatch(showLoader());
        // dispatch(getbyID(id));
 
    }, 
        [dispatch, id]);
    return (
      <div>
          {country ? 
            <div className="containerF">
                { loading ? <Loader/> :
                <div className="formulario">
                    <Link to="/home" className="boton right">x</Link>
                    <h1>{country.name}</h1>
                    <div className="grid">
                        <img src={country.image} alt={"flag img"} />
                        <div>
                            <p>ID: {country.ID}</p>
                            <p>Continent: {country.continent}</p>
                            <p>Capital: {country.capital}</p>
                            <p>Subregion: {country.subregion}</p>
                            <p>Area: { Number(country.area).toLocaleString()} km²</p>
                            <p>Population: {Number(country.population).toLocaleString()} hab</p>
                        </div>
                    </div>
                    <div>
                        {/* {country.activities >0? <h3 className="activityname">ACTIVITIES</h3>: ""} */}
                        <div className="grid">
                        {
                            country.activities?.map(act => {
                            return( <div className="actcard" key={act.id}>
                                    <p className="activityname">{act.name.toUpperCase()}</p>
                                    <p>Dificulty: {act.dificulty}</p>
                                    <p>Duration: {act.duration}</p>
                                    <p>Season: {act.season}</p>
                                </div> )         
                            })
                        }
                        </div>                    
                    </div>  
                </div>
                }
            </div> :<div className="Formulario">
                                <h1>Country not found</h1>
                                <img src={img404} alt ="404image"/>
                                <Link to="/" className="boton">Go back</Link>
                    </div>
            }
    </div>
    )
}

export default CountryDetail

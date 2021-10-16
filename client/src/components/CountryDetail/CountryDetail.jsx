import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getbyID } from '../../actions/index';
import { Link } from 'react-router-dom';

function CountryDetail() {
    const { id:code } =useParams();
    let [id] =useState(code);
    const dispatch = useDispatch();

    const country = useSelector(state => state.country);

    useEffect(()=>{ dispatch(getbyID(id))}, [dispatch, id]);

    return (
        <div className="formulario">
            <Link to="/home">Back </Link>
            <h1>{country.name}</h1>
            <div className="grid">
                <img src={country.image} alt={"flag img"} />
                <div>
                    <p>ID: {country.ID}</p>
                    <p>Continent: {country.continent}</p>
                    <p>Capital: {country.capital}</p>
                    <p>Subregion: {country.subregion}</p>
                    <p>Area: { parseFloat(country.area).toFixed(3).toLocaleString()} km²</p>
                    <p>Population: {country.population} hab</p>
                </div>
            </div>

            
        </div>
    )
}

export default CountryDetail

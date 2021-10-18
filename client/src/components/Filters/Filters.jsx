import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterContinent, setPage, orderBy } from "../../actions/index.js";


function Filters() {
    const dispatch= useDispatch();
    
    return (
        <div>
        {/* Selector de continente */}
         <select 
         name="continent" 
         id="continent"
         defaultValue="none"
         onChange={(e) => {
             dispatch(filterContinent(e.target.value))
             dispatch(setPage(1));
         }}>
            <option value="none"  disabled hidden>
                Continent
            </option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
            <option value='Antarctic'>Antarctic</option>
        </select>

        {/* Selector de actividad */}
        <select name="activity" id="activity"  defaultValue="none">
            <option value="none"  disabled hidden>
                Activity
            </option>
        </select>



        {/* Selector de orden */}
        <select 
        name="Order" 
        id="Order"
        defaultValue="none"
        onChange={(e) => {
            dispatch(orderBy(e.target.value))
            dispatch(setPage(1));
        }}>
            <option value="none" disabled hidden>
                    Order
            </option>
            <option value='AZ'>A-Z</option>
            <option value='ZA'>Z-A</option>
            <option value='Population+-'>Population +-</option>
            <option value='Population-+'>Population -+</option>
        </select>


        </div>
    )
}

export default Filters

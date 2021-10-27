import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterContinent, setPage, orderBy, filterActivity } from "../../actions/index.js";


function Filters() {
    const dispatch= useDispatch();

    const[filters, setFilters] = useState(
        {
            continent:"none",
            activity:"none",
            order:"none"
        }
    )
    
    const activities = useSelector(state => state.activities);

    function handlerOnChange (e){
        setFilters({
            continent:"none",
            activity:"none",
            order:"none",
            [e.target.name]:e.target.value,
        }) 
        dispatch(setPage(1));
    }
    
    return (
        <div>
        {/* Selector de continente */}
        <label> Search by:</label>
         <select 
         name="continent" 
         id="continent"
         value={filters.continent}
         onChange={(e) => {
             dispatch(filterContinent(e.target.value));
             handlerOnChange(e)
         }}>
            <option key= "a" value="none"  disabled hidden>
                Continent
            </option>
            <option key="Africa" value='Africa'>Africa</option>
            <option key="Americas" value='Americas'>America</option>
            <option key="Asia" value='Asia'>Asia</option>
            <option key="Europe" value='Europe'>Europe</option>
            <option key="Oceania" value='Oceania'>Oceania</option>
            <option key="Antartic" value='Antarctic'>Antarctic</option>
            <option key="All" value="">All</option>
        </select>

        {/* Selector de actividad */}
        {

        activities.length>0 ? 
        <>
        <label> or:</label>
        <select 
        name="activity" 
        id="activity"  
        value={filters.activity}
        onChange={(e) => {
            dispatch(filterActivity(e.target.value))
            handlerOnChange(e)
        }}
        >
            <option value="none"  disabled hidden>
                Activity
            </option>
            {
                    activities.map(c => (
                            <option value={c.name} key={c.id}>{c.name}</option>
                    ))
            } 
        </select></> : ""
        }
        {/* Selector de orden */}
        <label> Order by:</label>
        <select 
        name="Order" 
        id="Order"
        value={filters.order}
        onChange={(e) => {
            dispatch(orderBy(e.target.value))
            dispatch(setPage(1));
            setFilters({
                ...filters,
                order:e.target.value,
            }) 

        }}>
            <option key="none" value="none" disabled hidden>
                    Order
            </option>
            <option key="1" value='AZ'>A-Z</option>
            <option key="2" value='ZA'>Z-A</option>
            <option key="3" value='Population+-'>Population +-</option>
            <option key="4" value='Population-+'>Population -+</option>
        </select>


        </div>
    )
}

export default Filters

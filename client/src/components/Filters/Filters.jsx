
import { useDispatch, useSelector } from 'react-redux';
import { filterContinent, setPage, orderBy, filterActivity } from "../../actions/index.js";


function Filters() {
    const dispatch= useDispatch();
    
    const activities = useSelector(state => state.activities);
    
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
            <option key= "a" value="none"  disabled hidden>
                Continent
            </option>
            <option key="Africa" value='Africa'>Africa</option>
            <option key="Americas" value='Americas'>America</option>
            <option key="Asia" value='Asia'>Asia</option>
            <option key="Europe" value='Europe'>Europe</option>
            <option key="Oceania" value='Oceania'>Oceania</option>
            <option key="Antartic" value='Antarctic'>Antarctic</option>
        </select>

        {/* Selector de actividad */}
        <select 
        name="activity" 
        id="activity"  
        defaultValue="none"
        onChange={(e) => {
            dispatch(filterActivity(e.target.value))
            dispatch(setPage(1));
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

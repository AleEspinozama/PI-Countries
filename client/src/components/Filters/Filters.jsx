import React from 'react'

function Filters() {
    return (
        <div>
        {/* Selector de continente */}
         <select name="continent" id="continent">
            <option value="none" selected disabled hidden>
                Continent
            </option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
            <option value='Antarctic'>Antarctic</option>
        </select>

                {/* Selector de continente */}
        <select name="activity" id="activity">
            <option value="none" selected disabled hidden>
                Activity
            </option>
        </select>



        {/* Selector de orden */}
        <select name="alphabeticalOrder" id="alphabeticalOrder">
            <option value="none" selected disabled hidden>
                    Order
            </option>
            <option value='AZ'>A-Z</option>
            <option value='ZA'>Z-A</option>
            <option value='LowerPopuation'>Population +-</option>
            <option value='HigherPopulation'>Population -+</option>
        </select>


        </div>
    )
}

export default Filters

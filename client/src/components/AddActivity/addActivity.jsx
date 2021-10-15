import Navbar from '../Navbar/Navbar';

import './addActivity.css';

function addActivity() {
    return (
        <div>
            <Navbar /> 
            <div>
      
                <form className="formulario">   
                <h1>Add Activity</h1>
                    <label>Activity</label>
                    <input type="text" placeholder="Activity" name="name"/>
                    
                    <div class="rate">
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

                    <label>Duration</label>
                    <input type="text" placeholder="Duration" name="duration"/>

                            {/* Selector de temporada */}
                    <div>
                    <label>Duration</label>
                    <select name="Season" id="Season">
                        <option value="none" selected disabled hidden>
                            Season
                        </option>
                        <option value='Spring'>Spring</option>
                        <option value='Summer'>Summer</option>
                        <option value='Autumn'>Autumn</option>
                        <option value='Winter'>Winter</option>
                        <option value='All'>All</option>
                    </select>
                    </div>
                    <button type="submit" className="boton">Submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default addActivity

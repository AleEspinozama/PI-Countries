import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { getAll } from "../../actions/index.js";
import { useDispatch } from "react-redux";

import './Navbar.css';

function Navbar() {
    const dispatch = useDispatch();

    return (
        <div className="containerNav">
        <header className="navbar">
               <Link to="/" className= "botonLogo">Hello, World</Link>
               {/* <Link to="/home" className= "botonLogo">Home</Link> */}
               <Search />
               <Link to="/Activity" className= "boton" onClick= {(e) => {
                   dispatch(getAll())
                   }}>Add Activity</Link>

        </header>
        </div>
    )
}

export default Navbar

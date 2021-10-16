import { Link } from 'react-router-dom';
import Search from '../Search/Search';

import './Navbar.css';

function Navbar() {
    return (
        <div className="containerNav">
        <header className="navbar">
               <Link to="/" className= "botonLogo">Hello, World</Link>
               <Search />
               <Link to="/Activity" className= "boton">Add Activity</Link>

        </header>
        </div>
    )
}

export default Navbar

import { Link } from 'react-router-dom';
import Search from '../Search/Search';

import './Navbar.css';

function Navbar() {
    return (
        <header className="navbar">
               <Link to="/" className= "botonLogo">Hello, World</Link>
               <Link to="/Activity" className= "boton">Add Activity</Link>
               <Search />
        </header>
    )
}

export default Navbar

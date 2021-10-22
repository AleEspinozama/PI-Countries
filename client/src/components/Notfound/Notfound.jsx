import img404 from "../../img/404.gif"
import { Link } from 'react-router-dom';

function Notfound() {
    return (
                    <div className="Formulario">
                                <h1>404 Page not found</h1>
                                <img src={img404} alt ="404image"/>
                                <br/>
                                <br/>
                                <Link to="/" className="boton back">Go back</Link>
                    </div>
    )
}

export default Notfound

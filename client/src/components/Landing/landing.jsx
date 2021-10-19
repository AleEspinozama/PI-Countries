import React from 'react';
import { Link } from 'react-router-dom'
import './landing.css';

function Landing() {


    return (
        <div className="container">
         
            <div className="landing">
            <h1 className= "title">Hello, World</h1>              
                <Link to="/home/" className="boton start">Begin Adventure</Link>
            </div>
        </div>
    )
}

export default Landing

import React from 'react';
import { Link } from 'react-router-dom'
import './landing.css';

function landing() {
    return (
        <div className="container">
         
            <div className="landing">
            <h1 className= "title">Hello, World</h1>              
                <Link exact to="/home/" className="boton start">Begin Adventure</Link>
            </div>
        </div>
    )
}

export default landing

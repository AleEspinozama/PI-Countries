import React from 'react';
import { Link } from 'react-router-dom'
import './landing.css';
import { useEffect } from "react";
import { getAll } from "../../actions/index.js";
import { useDispatch } from "react-redux";

function Landing() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAll());
    }, [dispatch]);

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

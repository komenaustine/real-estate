import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbarmenu">
                <Link to="/">
                    Home
                </Link>
                <Link to="/about"> 
                    About Us
                </Link>
                 <Link to="/properties">
                    Properties
                </Link>
                <Link to="/services">
                    Services
                </Link>

            </div>
        </div>
    )
}

export default Navbar
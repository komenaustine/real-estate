import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbarmenu">
                <a href="/">
                    Home
                </a>
                <Link href="/about"> 
                    About Us
                </Link>
                 <Link href="/properties">
                    Properties
                </Link>
                <a href="/services">
                    Services
                </a>

            </div>
        </div>
    )
}

export default Navbar
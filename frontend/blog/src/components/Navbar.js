import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {

    return (
        <React.Fragment>
            <div className="navbar">
                <h3 className="logo">Axis Blog</h3>
                <ul>
                    <li><Link className="nav-link" to= '/'>Home</Link></li>
                    <li><Link className="nav-link" to='/blog'>Blog</Link></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Navbar;
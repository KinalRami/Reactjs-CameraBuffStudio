import  React from  "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () =>
{
    return(
         <div>
            <nav>
                <div className="logo">                    
                    <h1 className="logotext">Camera Buff Studio</h1>
                </div>
                <div className="container">
                <ul>
                <li className="nav-item">
                <NavLink activeclassname="menu_active" className="nav-link" to="/">Home</NavLink>
                 </li>
    
                <li className="nav-item">
                <NavLink activeclassname="menu_active" className="nav-link" to="/Service">Services</NavLink>
                 </li>
                 <li className="nav-item">
                 <NavLink activeclassname="menu_active" className="nav-link" to="/Gallary">Gallary</NavLink>
                </li>
    
                <li className="nav-item">
                 <NavLink activeclassname="menu_active" className="nav-link" to="/About">About</NavLink>
                </li>
    
                <li className="nav-item">
                <NavLink activeclassname="menu_active"  className="nav-link" to="/Contact">Contact</NavLink>
                </li>

                 
            </ul>
            </div>
            </nav>
            </div>

    )
}

export default Navbar;
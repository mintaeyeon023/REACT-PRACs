import React from "react";
import { NavLink} from "react-router-dom";

function Nav() {
    <div>        
        <NavLink to="/about"> ABOUT </NavLink><br /><br />
        <NavLink to="/" exact='true'> HOME </NavLink><br />
    </div>
}

export default Nav;
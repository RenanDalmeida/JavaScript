import React from "react";
import Logo from "../../img/Logo.jpg";

function Menu() {
    return (
        <nav className="navbar" style={{backgroundColor: "black"}}>
            <a className="navbar-brand" href="index.html" style={{margin: "auto"}}>
                <img src={Logo} width="60" height="60" alt="" loading="lazy"/>
            </a>
        </nav>
    );
}

export default Menu;
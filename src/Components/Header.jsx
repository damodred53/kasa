import React from "react";
import Logo_kasa from '../assets/logo_kasa.svg';
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
    <div className="header">
        <img className="header_logo" src={Logo_kasa} alt="logo de kasa"></img>

        <div className="header_div">
            <ul className="header_div_list">
                <li ><NavLink className="header_div_list_link" to="/">Accueil</NavLink></li>
                <li ><NavLink className="header_div_list_link" to="/about">A Propos</NavLink></li>
            </ul>
        </div>
    </div>
    )
}
export default Header;
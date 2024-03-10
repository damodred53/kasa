import React from "react";
import Logo_footer from "../assets/logo_footer_kasa.svg"


/* fonction permettant de créer le footer présent sur toutes le spages du site web */

const Footer = () => {
    
    return (
        <div className="footer">
            <img className="footer_picture" src={Logo_footer} alt="logo kasa présent bas de page"></img>

            <div className="footer_div">
                <p className="footer_paragraph">© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;
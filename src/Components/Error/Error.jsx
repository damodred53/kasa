import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

/* page apparaissant à l'écran en cas d'URL incorrect */

const Error = () => {

    return (
        <div >
            <div className="all_error">
                <Header />
                
            <div  className="error">
                <h1 className="error_title">404</h1>
                <h2 className="error_subtitle">Oups ! La page que vous demandez n'existe pas.</h2>
                <Link className="error_link" to="/" >Retourner sur la page d'accueil</Link>
            </div>

            </div>
        </div>
    )
}

export default Error;
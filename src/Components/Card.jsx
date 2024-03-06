import React from "react";
import { Link } from "react-router-dom";
const Card = ({ title, id, picture}) => {

    return (

        <article className="galery_article" key={id} style={{backgroundImage : `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6)), url(${picture})` }}>
            <Link className="galery_article_link" to={`./logement/${id}`} key={`${id}`}  >
                <h2 className="galery_article_title">{title}</h2>
            </Link>
        </article >  

    )
}
export default Card;
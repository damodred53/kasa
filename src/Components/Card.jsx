import React from "react";
import { Link } from "react-router-dom";

const Card = ({key,title,  picture}) => {


console.log(title)
console.log(picture)

    return (

        <article className="galery_article" key={key} style={{backgroundImage : `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6)), url(${picture})` }}>
        <Link className="galery_article_link">
                <h2 className="galery_article_title">{title}</h2>
        </Link>
    </article >  

    )
}
export default Card;
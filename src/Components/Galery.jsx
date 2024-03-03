import React from "react";
import { useEffect, useState } from "react";
import Logements from '../dataBase/data.json';
import { Link } from "react-router-dom";

const Galery = () => {

    const [appartements, setAppartements] = useState([])

    useEffect(() => {
        setAppartements(Logements)
    }, [])

    console.log(appartements)

    return (
        <div className="galery">
            {appartements.map((appartement) => {
                return (
                        <article className="galery_article" style={{backgroundImage : `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6)), url(${appartement.cover})` }}>
                            <Link className="galery_article_link">
                                    <h2 className="galery_article_title">{appartement.title}</h2>
                            </Link>
                        </article >  
                )
            })}
        </div>

    )
}
export default Galery;
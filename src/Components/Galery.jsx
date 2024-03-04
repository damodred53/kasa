import React from "react";
import { useEffect, useState } from "react";
import Logements from '../dataBase/data.json';
import { Link } from "react-router-dom";
import Card from "./Card.jsx";

const Galery = () => {

    const [appartements, setAppartements] = useState([])

    useEffect(() => {
        setAppartements(Logements)
    }, [])

    /*console.log(appartements)*/

    return (
        <div className="galery">
            {appartements.map((appartement) => (
                <Card  key={appartement.id} id={appartement.id} title={appartement.title} picture={appartement.cover} />
            ))}
        </div>

    )
}
export default Galery;
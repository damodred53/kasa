import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card.jsx";

/* fonction permettant de gérer les logements visibles sur la page d'accueil */

const Galery = () => {

    const [appartements, setAppartements] = useState([])

    /* fonction permettant lors du premier chargement de la page d'aller chercher les données des logements */

    useEffect(() => {

        const fetchData = async () => {
        const response = await fetch('/dataBase/data.json')
        const data = await response.json()
        setAppartements(data)
        }

        fetchData()

    }, [])

    return (
        <div className="galery">
            {appartements.map((appartement) => (
                <Card  key={appartement.id} id={appartement.id} title={appartement.title} picture={appartement.cover} />
            ))}
        </div>
    )
}
export default Galery;
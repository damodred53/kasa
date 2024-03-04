import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card.jsx";

const Galery = () => {

    const [appartements, setAppartements] = useState([])

    useEffect(() => {

        const fetchData = async () => {
        const response = await fetch('/dataBase/data.json')
        const data = await response.json()
        setAppartements(data)
        }

        fetchData()

    }, [])

    console.log("données des logements : ",appartements)

    return (
        <div className="galery">
            {appartements.map((appartement) => (
                <Card  key={appartement.id} id={appartement.id} title={appartement.title} picture={appartement.cover} />
            ))}
        </div>

    )
}
export default Galery;
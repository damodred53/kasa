import React from "react";
import etoileActive from "../../assets/star_active.png";
import etoileInactive from "../../assets/star_inactive.png";

const Etoiles = ({rating}) => {


console.log("nombre d'étoiles :", rating )

const maxStars = 5;
const numberStar = []

for (let i = 0; i< maxStars; i++) {
    
    i < rating ?  numberStar.push(<img src={etoileActive} alt={'icone d\'étoile pleine'} key={i}></img>) 
    :
    numberStar.push(<img src={etoileInactive} alt={'icone d\'étoile pleine'} key={i}></img>)
}
    return numberStar
}

export default Etoiles;
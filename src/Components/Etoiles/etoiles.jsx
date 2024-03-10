import React from "react";
import etoileActive from "../../assets/star_active.png";
import etoileInactive from "../../assets/star_inactive.png";


/* fonction permettant de gérer le nombre d'étoiles pleines ou vides à afficher à l'écran */

const Etoiles = ({rating}) => {

const maxStars = 5;
const numberStar = []

/* boucle for confrontant l'index (maximum 5) à la note de l'appartement */

for (let i = 0; i< maxStars; i++) {
    /* si l'index est inférieur ou égale à la note : */
    i < rating ?  numberStar.push(<img src={etoileActive} alt={'icone d\'étoile pleine'} key={i}></img>) 
    :
    /* Si l'index est strictement supéreur à la note */
    numberStar.push(<img src={etoileInactive} alt={'icone d\'étoile pleine'} key={i}></img>)
}
    return numberStar
}

export default Etoiles;
import React from "react";
import prevArrow from "../../assets/previous_arrow.png";
import nextArrow from "../../assets/next_arrow.png";
import { useState } from "react";

const Carousel = ({images, texte}) => {

    const [index, setIndex] = useState(0);
    const length = images.length;

    const handleNext = () => {
        if (index+1 >= length) {
            setIndex(0)

        } else {
            setIndex(index+1);
        }
        
      };
    
      const handlePrevious = () => {
        if (index <= 1) {
            setIndex(length-1)
        } else {
            setIndex(index-1);
        }
        
      };

    


console.log("images pour le carousel: ", images);

    return (
        <div className="carousel">
            <div className="carousel_picture" style={{backgroundImage: `url(${images[index]})`}} alt={`photographie de l'appartement: ${texte}`} >
                <img src=""></img>
                <img className="carousel_arrow_previous" src={prevArrow} onClick={handlePrevious}></img>
                <img className="carousel_arrow_next" src={nextArrow} onClick={handleNext}></img>
                <div className="carousel_number">
                    {index + 1}/{length}
            </div>
            </div>
        </div>
    )
}

export default Carousel;
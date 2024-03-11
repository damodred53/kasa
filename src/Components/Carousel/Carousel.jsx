import React from "react";
import prevArrow from "../../assets/previous_arrow.png";
import nextArrow from "../../assets/next_arrow.png";
import { useState } from "react";

const Carousel = ({images, texte}) => {

    /* UseState permettant de savoir quelle image montrer en fonction de son index */
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
        if (index < 1) {
            setIndex(length-1)
        } else {
            setIndex(index-1);
        }
      };

    return (
        <div data-testid="carousel-1" className="carousel">
            <div className="carousel_picture" style={{backgroundImage: `url(${images[index]})`}} alt={`photographie de l'appartement: ${texte}`} >
                {length === 1 ? 
                ""
                :
                <img className="carousel_arrow_previous" src={prevArrow} onClick={handlePrevious} alt="précédent"></img>
                }
                {length === 1 ? 
                ""
                :
                <img className="carousel_arrow_next" src={nextArrow} onClick={handleNext} alt="suivant"></img>
                }
                <div className="carousel_number">
                    {index + 1}/{length}
            </div>
            </div>
        </div>
    )
}

export default Carousel;
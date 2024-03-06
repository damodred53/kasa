import React from "react";
import prevArrow from "../../assets/previous_arrow.png";
import nextArrow from "../../assets/next_arrow.png";

const Carousel = () => {



    return (
        <div className="carousel">
            <img className="carousel_arrow_previous" src={prevArrow}></img>
            <img className="carousel_arrow_next" src={nextArrow}></img>
            <div className="carousel_number">

            </div>
        </div>
    )
}

export default Carousel;
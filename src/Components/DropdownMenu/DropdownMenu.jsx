import React from "react";
import Cursor from "../../assets/cursor.svg";
import { useRef, useState } from "react";

const DropdownMenu = ({paragraphe, titre}) => {

const dropdownContentPart = useRef(null)
const [isDisplayActivated, setIsDisplayActivated] = useState(false)

const displayContent = () => {

    
    const selectedInstance = dropdownContentPart.current;

    if (selectedInstance.style.display !== "block") {
        selectedInstance.style.display = "block";
        setIsDisplayActivated(true)

    } else {
        selectedInstance.style.display = "none";
        setIsDisplayActivated(false)
    }
}


    return (
        <div className="dropdown">

            <div className="dropdown_visible_part">
                <h2 className="dropdown_visible_part_title">{titre}</h2>
                <img className="dropdown_visible_part_cursor" src={Cursor} alt="curseur" onClick={displayContent}></img>
            </div>
            
            <div className={`dropdown_invisible_part ${isDisplayActivated ? "displayed" : ""}`}  ref={dropdownContentPart}>
                <div className="dropdown_invisible_part_paragraph">{paragraphe}</div>         
            </div>
        </div>
    )
}
export default DropdownMenu;
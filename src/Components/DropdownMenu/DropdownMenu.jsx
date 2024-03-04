import React from "react";
import Cursor from "../../assets/cursor.svg";

const DropdownMenu = (paragraphe) => {

    return (
        <div className="dropdown">

            <div className="dropdown_visible_part">
                <h2 className="dropdown_visible_part_title"></h2>
                <img className="dropdown_visible_part_cursor" src={Cursor}></img>
            </div>
            
            <div className="dropdown_invisible_part">
                <div className="dropdown_invisible_part_paragraph">{paragraphe.data}</div>
                
            </div>
        </div>
    )
}
export default DropdownMenu;
import React, { useEffect, useState } from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import BannerAbout from "../Banner_About.jsx";
import DropdownMenu from "../DropdownMenu/DropdownMenu.jsx";


const About = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/dataBase/data_about.json" );
                const jsonData = await response.json();
                setData(jsonData);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    

    return (
        <div>
            <Header />
            <BannerAbout />
            <div className="surrounding_dropdown_menu">
                {data.map((about) => {

                    return ( 
                        <DropdownMenu data={about.paragraphe}/>
                    )
                })}
            </div>
            <Footer />
        </div>
    );
};

export default About;

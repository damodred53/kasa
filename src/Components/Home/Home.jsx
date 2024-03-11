import React from "react";
import Header from "../Header";
import Banner from "../Banner_Home";
import Galery from "../Galery";

/* page d'accueil du site web */

const Home = () => {

  return (
    <div className="main">
      <div className="all_about">
        <Header />
        <Banner  />
        <Galery />
      </div>
        
    </div>
  );
}

export default Home;
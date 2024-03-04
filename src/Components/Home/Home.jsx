import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../Banner_Home";
import Galery from "../Galery";



const Home = () => {

  return (
    <div>
      <Header />
      <Banner  />
      <Galery />
      <Footer />
    </div>
  );
}

export default Home;
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import activeStar from '../../assets/star_active.png';
import inactiveStar from '../../assets/star_inactive.png';

const Logement = () => {
  const [logement, setLogement] = useState([]);
  /*const [selectedLogement, setSelectedLogement] = useState({});*/
  let selectedLogement = {};
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/dataBase/data.json');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setLogement(data);
      } catch (error) {
        console.error('Impossible de récupérer les données : ', error);
      }
    };

    fetchData();
  }, []);


    const filteredData = logement.find((selection) => selection.id === id);
    console.log(filteredData)
    if (filteredData) {
        /*selectedLogement(filteredData);*/
        selectedLogement = filteredData
    } else {
      navigate('/*');
    }


  // Accédez aux propriétés de selectedLogement pour afficher dans votre composant
  const selectedTitle = selectedLogement.title || '';
  const selectedLocation = selectedLogement.location || '';
  const selectedHostName = selectedLogement.host ? selectedLogement.host.name : '';
  const selectedTags = selectedLogement.tags || '';

  return (
    <div>
      <Header />
      <Carousel />
      <div className="logement">
        <div className="logement_title_profil">
          <div className="logement_title_profil_location">
            <h1>{selectedTitle}</h1>
            <h2>{selectedLocation}</h2>
          </div>
          <div className="logement_title_profil_vendor">
            <h2>{selectedHostName}</h2>
          </div>
        </div>
        <div className="logement_tags">
          <div>{selectedTags}</div>
        </div>
        <div className="logement_dropdown_menus">{/* ... */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;

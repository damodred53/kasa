import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import Etoiles from '../Etoiles/etoiles.jsx';

/* page permettant d'afficher les appartements */

const Logement = () => {
  const [logement, setLogement] = useState([]);
  let selectedLogement = {};

  /* constantes permettant de récupérer l'id du logement lui même contenu dans l'URL de la page */
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  /* fonction permettant de récupérer lors du premier chargement de la page les données des logements  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/dataBase/data.json');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setLogement(data);
      } catch (error) {
        console.error('Impossible de récupérer les données : ', error);
      }
    };

    fetchData();
  }, []);

/* fonction permettant de retrouver les informations du logement dont l'id est égale à l'url de la page */
    const filteredData = logement.find((selection) => selection.id === id);

    if (filteredData) {
        selectedLogement = filteredData
    } else {
      navigate('/*');
    }

    /* extraction des données utiles contenues dans la variable selectedLogement */
  const selectedTitle = selectedLogement.title || '';
  const selectedLocation = selectedLogement.location || '';
  const selectedHostName = selectedLogement.host ? selectedLogement.host.name : '';
  const selectedHostPicture = selectedLogement.host ? selectedLogement.host.picture : '';
  const selectedTags = selectedLogement.tags || '';
  const selectedPictures = selectedLogement.pictures || '';
  const selectedRating = selectedLogement.rating || '';
  
  return (
    <div className='main'>
      <div className='all_logement'>
        <Header />
        <Carousel images={selectedPictures} texte={selectedTitle} />
        <div className="logement">
          

            <div className="logement_title_left_part">
              <h1 className='logement_title_left_part_location_main_title'>{selectedTitle}</h1>
              <h2 className='logement_title_profil_location_sub_title'>{selectedLocation}</h2>
              <div className="logement_tags">
              {Array.isArray(selectedTags) && selectedTags.map((tag, index) => (
                <p className='logement_tags_list' key={index}>{tag}</p>
              ))}
            </div>

          </div>
    
            <div className="logement_title_right_part">
              <div className="logement_title_right_part_vendor">
                <h2 className='logement_title_right_part_vendor_sub_title'>{selectedHostName}</h2>
                <img className='logement_title_right_part_vendor_picture' src={selectedHostPicture} alt={`profil de ${selectedHostName}`} />
              </div>
              <div className='logement_tags_stars'>
                <Etoiles className="logement_tags_stars_icon" rating={selectedRating} />
              </div>
            </div>
          </div>
          
        
        <div className="logement_dropdown_menus">
          
            <DropdownMenu  className='test_test'  titre={"Description"} paragraphe={selectedLogement.description} />
            <DropdownMenu className='test_test'  titre={"Équipement"} paragraphe={selectedLogement.equipments} />
          
        </div>
        
      </div>
      
    </div>
  );
  
};

export default Logement;

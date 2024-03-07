import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import activeStar from '../../assets/star_active.png';
import inactiveStar from '../../assets/star_inactive.png';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import Etoiles from '../Etoiles/etoiles.jsx';

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
    /*console.log(filteredData)*/
    if (filteredData) {
        /*selectedLogement(filteredData);*/
        selectedLogement = filteredData
    } else {
      navigate('/*');
    }

    console.log("donnée du logement selectionné :", selectedLogement)
  // Accédez aux propriétés de selectedLogement pour afficher dans votre composant
  const selectedTitle = selectedLogement.title || '';
  const selectedLocation = selectedLogement.location || '';
  const selectedHostName = selectedLogement.host ? selectedLogement.host.name : '';
  const selectedHostPicture = selectedLogement.host ? selectedLogement.host.picture : '';
  const selectedTags = selectedLogement.tags || '';
  const selectedPictures = selectedLogement.pictures || '';
  const selectedRating = selectedLogement.rating || '';
  
  console.log(selectedPictures)
  return (
    <div>
      <Header />
      <Carousel images={selectedPictures} texte={selectedTitle}/>
      <div className="logement">
        <div className="logement_title_profil">
          <div className="logement_title_profil_location">
            <h1 className='logement_title_profil_location_main_title'>{selectedTitle}</h1>
            <h2 className='logement_title_profil_location_sub_title'>{selectedLocation}</h2>
          </div>
          <div className="logement_title_profil_vendor">
            <h2 className='logement_title_profil_vendor_sub_title'>{selectedHostName}</h2>
            <img className='logement_title_profil_vendor_picture' src={selectedHostPicture} alt={`profil de ${selectedHostName}`}></img>
          </div>
        </div>
        <div className='logement_div'>
          <div className="logement_tags">
            {Array.isArray(selectedTags) && selectedTags.map((tag, index) => (
            <p className='logement_tags_list' key={index}>{tag}</p>
            ))} 
          <div>

            <div className='logement_tags_stars'>
            
              < Etoiles rating={selectedRating} />
            </div>
        

        </div>

      </div>
          
      </div>
        <div className="logement_dropdown_menus">{
            <>
            <DropdownMenu titre={"Description"} paragraphe={selectedLogement.description} />
            <DropdownMenu  titre={"Équipement"} paragraphe={selectedLogement.equipments} />
            </>
        }</div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Error from './Components/Error/Error.jsx';
import Logement from './Components/Logement/Logement.jsx';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from './Components/Footer.jsx';

/* capture de l'élément root présent dnas le html */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* intégration des routes présentes dans le site web */
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />}  />
        <Route path='/*' element={<Error />} />
        <Route path='/logement/:id' element={<Logement />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('footer_kasa'));
footer.render(
  <Footer />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

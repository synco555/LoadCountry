
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componentes/home';
import DetailCountry from './Componentes/detailcountry';
import axios from 'axios';
import './App.css';
//import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

function App() {
  
  const [countryData, setCountryData] = useState([]);
  const [originalCountryData, setOriginalCountryData] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountryData(response.data);
        setOriginalCountryData(response.data)
      })
      .catch(error => {
        setCountryData([]);
        setOriginalCountryData([]);
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Router>
    <div>
      <Routes>
      <Route exact path="/" element={<Home countryData={countryData} setCountryData={setCountryData} originalCountryData={originalCountryData} setOriginalCountryData ={setOriginalCountryData}/>} />
          <Route path="/:fifa" element={<DetailCountry countryData={countryData} />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

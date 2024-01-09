
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export default function Home() {
const [countryCode, setCountryCode] = useState('');
const [countryData, setCountryData] = useState(null);

const fetchData = () => {
  axios.get(`https://restcountries.com/v3.1/name/${countryCode}`)
    .then(response => {
      // Handle the fetched data
      setCountryData(response.data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
      setCountryData(null);
    });
};

const handleInputChange = (e) => {
  setCountryCode(e.target.value);
};

return (
  <div>
    <input
      type="text"
      value={countryCode}
      onChange={handleInputChange}
      placeholder="Enter country code"
    />
    <button onClick={fetchData}>Fetch Data</button>

    {countryData && (
      <div>
        <h2>Search your Country:</h2>
        <pre>{JSON.stringify(countryData, null, 2)}</pre>
      </div>
    )}
  </div>
);
    }



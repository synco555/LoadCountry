
import React, { useState } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './componentes.css';
import Dropdown from './dropdown';
//import DetailCountry from './detailcountry';



export default function Home({ countryData, setCountryData, originalCountryData, setOriginalCountryData }) {

    //falta req see all countries: regiao, capital, name, populção
    //const [originalCountryData, setOriginalCountryData] = useState([]);
    const [countryCode, setCountryCode] = useState([]);
    //const [countryData, setCountryData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const regions = [
        { name: 'Africa', code: 'Africa' },
        { name: 'America', code: 'Americas' },
        { name: 'Asia', code: 'Asia' },
        { name: 'Europe', code: 'Europe' },
        { name: 'Oceania', code: 'Oceania' }
    ];

    // useEffect(() => {
    //     axios.get('https://restcountries.com/v3.1/all')
    //         .then(response => {
    //             setCountryData(response.data);
    //             setOriginalCountryData(response.data)
    //             //console.log(response.data)
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //             setCountryData([]);
    //             setOriginalCountryData([]);
    //         });
    // }, []);

    const fetchData = () => {
        axios.get(`https://restcountries.com/v3.1/name/${countryCode}`)
            .then(response => {
                // Handle the fetched data
                setCountryData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching data:', error);
                setCountryData([]);
            });
    };

    const handleInputChange = (e) => {
        setCountryCode(e.target.value);
    };

    const getRegion = (e) => {
        console.log(originalCountryData)

        const tempcountries = originalCountryData.filter(el => el.region === e.code)
        console.log(tempcountries)
        setSelectedRegion(e);
        setCountryData(tempcountries);


    }

    //countrydata.borders

    return (
       
        <div>

            {/* Dropdown MEnu for Regions text and Map */}


            <div className='dropdownsearch'>
                <div className='alignleft'>
                    {/* Input text */}
                    <input
                        type="text"
                        value={countryCode}
                        onChange={handleInputChange}
                        placeholder="Enter country code"
                    />
                    <button onClick={fetchData}>Fetch Data</button>
                </div>
                <div className='alignright'>
                    {/* dropdown */}
                    <Dropdown regions={regions} selectedRegion={selectedRegion} functiondropdown = {(e) => {getRegion(e.value)}}/>
                </div>
            </div>

            {/* Map country data */}
            {countryData?.map((country, index) => (
                
                <div key={index}>
                    <Link to={{ pathname: `/${country.fifa}`}}>
                    <div>
                        <img src={country.flags?.svg} alt={`Flag of ${country.name?.common}`} />
                        <p>Country: {country.name?.common}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                    </div>
                    </Link>
                </div>
            ))}
            
        </div>
        
    );
}

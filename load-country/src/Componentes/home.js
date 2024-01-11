
import React, { useState } from 'react';
import axios from 'axios';
import './componentes.css';
import Dropdown from './dropdown';
import SearchBar from './searchbar';
import Card from './countrycard';

export default function Home({ countryData, setCountryData, originalCountryData, setOriginalCountryData }) {

    const [countryCode, setCountryCode] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);

    const regions = [
        { name: 'Africa', code: 'Africa' },
        { name: 'America', code: 'Americas' },
        { name: 'Asia', code: 'Asia' },
        { name: 'Europe', code: 'Europe' },
        { name: 'Oceania', code: 'Oceania' }
    ];

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
                ;
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

    return (

        <div className='background'>
            {/* Dropdown MEnu for Regions text and Map */}
            <div className='dropdownsearch'>
                <div className='alignleft'>
                    {/* SEARCH */}
                    <SearchBar handleInputChange={handleInputChange} fetchData={fetchData} />

                </div>
                <div className='alignright'>
                    {/* dropdown */}
                    <Dropdown regions={regions} selectedRegion={selectedRegion} functiondropdown={(e) => { getRegion(e.value) }} />
                </div>
            </div>

            <div className='displayGrid4'>
                <Card countryData={countryData} />
            </div>
        </div>
    );
}

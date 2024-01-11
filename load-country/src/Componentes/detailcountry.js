import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from './backbutton';
import { BorderCountryCard } from './bordercountries';
import DetailCountryCard from './detailcountrycard';

export default function DetailCountry({ countryData }) {
    const { fifa } = useParams();

    // Find the selected country from countryData based on fifa 
    const selectedCountry = countryData.find((country) => country.fifa === fifa);
    console.log("hey", fifa, selectedCountry)
    if (!selectedCountry) {
        return <div>Country not found</div>;
    }

    const findCountryByFIFA = (code) => {
        if (!code) {
            console.warn("FIFA code is null or undefined");
            return null;
        }

        const foundCountry = countryData.find((country) => country.fifa === code);

        if (!foundCountry) {
            console.warn(`Country with FIFA code ${code} not found`);
            return "Country with FIFA code not found"
        }

        return foundCountry;
    };

    return (
        <div className='background'>

            <div className="back">
                <BackButton />
            </div>

            <div>
                <DetailCountryCard selectedCountry={selectedCountry} />
            </div>
            <h3>Border Countries</h3>
            <div className='displayGrid4'>
                {selectedCountry.borders?.map((fifa, index) => {
                    const borderCountry = findCountryByFIFA(fifa);

                    return (
                        <div key={index}>
                            <BorderCountryCard borderCountry={borderCountry} />
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
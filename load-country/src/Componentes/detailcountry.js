import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export default function DetailCountry({ countryData }) {
    const { fifa } = useParams();
    console.log(countryData)
    // Find the selected country from countryData based on the fifa code
    const selectedCountry = countryData.find((country) => country.fifa === fifa);
    console.log(selectedCountry)
    if (!selectedCountry) {
        return <div>Country not found</div>;
    }

    const findCountryByFIFA = (code) => {
        return countryData.find((country) => country.fifa === code);
    };

    return (
        <div>
            {/* Back button */}
            <div className='card'>
                <Button/>
            </div>
           
            <div>
                <img src={selectedCountry.flags?.svg} alt={`Flag of ${selectedCountry.name?.common}`} />
                <p>Country: {selectedCountry.name?.common}</p>
                <p>Region: {selectedCountry.region}</p>

                {/* Display other details */}
            </div>
            <div>
                {/* Display Border Countries */}
                <h3>Border Countries</h3>
                <ul>
                    {selectedCountry.borders?.map((fifa, index) => {
                        const borderCountry = findCountryByFIFA(fifa);
                        return (
                            <li key={index}>
                                {borderCountry ? (
                                    <Link to={`/${borderCountry.fifa}`}>
                                        <strong>{borderCountry.name?.common}</strong> - {borderCountry.region}
                                        <img src={borderCountry.flags?.svg} alt={`Flag of ${borderCountry.name?.common}`} />
                                    </Link>
                                ) : (
                                    'Unknown Country'
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
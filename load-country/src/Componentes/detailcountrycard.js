import React from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';

export default function DetailCountryCard({ selectedCountry }) {

    return (
        <div className="cardsolo">
            {/* Map country data */}
            <div className='borders'>
                <Card title={selectedCountry.name?.common}>
                    <img className='img-cardsolo' src={selectedCountry.flags?.svg} alt={`Flag of ${selectedCountry.name?.common}`} />
                    <p>Country: {selectedCountry.name?.common}</p>
                    <p>Capital: {selectedCountry?.capital}</p>
                    <p>Region: {selectedCountry.region}</p>
                    <p>Population: {selectedCountry.population}</p>
                    <p>Area: {selectedCountry.area}</p>
                </Card>
            </div>
        </div>

    )
}
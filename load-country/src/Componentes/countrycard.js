import React from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
export default function CountryCard({ countryData }) {
    return (
        <>
            {/* Map country data */}
            {countryData?.map((country, index) => (
                <div key={index}>
                    <Link to={{ pathname: `/${country.fifa}` }}>
                        <div className='borders'>
                            <Card title={country.name?.common}>
                                <img className='flag' src={country.flags?.svg} alt={`Flag of ${country.name?.common}`} />

                                <p className="m-0">Region: {country.region}</p>
                                <p className="m-0">Capital: {country.capital}</p>
                                <p className="m-0">Population: {country.population}</p>
                            </Card>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}
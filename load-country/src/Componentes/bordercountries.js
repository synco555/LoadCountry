import React from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';

export function BorderCountryCard({ borderCountry }) {
    return (
        <div className='testeeee'>
            <Link to={`/${borderCountry.fifa}`}>
                <div className='borders'>
                    <Card title={borderCountry ? borderCountry.name?.common : ''}>
                        <img className='flag' src={borderCountry.flags?.svg} alt={`${borderCountry.name?.common}`} />
                        <p>{borderCountry.name?.common}</p>
                        <p>{borderCountry.region}</p>
                    </Card>
                </div>
            </Link>
        </div>
    );
}
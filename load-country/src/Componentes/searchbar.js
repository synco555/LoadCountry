import React from 'react';
import { InputText } from "primereact/inputtext";

export default function SearchBar({ handleInputChange, fetchData, countryCode }) {
    //Press Enter to search
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchData();
        }
    };

    return (
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
                placeholder="Find a country"
                value={countryCode}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
        </span>
    );
}
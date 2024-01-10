
import React from "react";
import { Dropdown } from 'primereact/dropdown';

export default function DropdownMenu({ regions, selectedRegion, functiondropdown}) {
    
    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedRegion} onChange={ functiondropdown} options={regions} optionLabel="name" 
                editable placeholder="Select Region" className="w-full md:w-14rem" />
        </div>
    )
}
import React from 'react'; 
import { Button } from 'primereact/button';
import './componentes.css';

export default function BackButton() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Link" link />
            <a href="/" target="_blank" rel="noopener noreferrer" class="p-button font-bold">
                Home
            </a>

        </div>

        
    )
}
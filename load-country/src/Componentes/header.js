import { React, useState } from 'react'
import { InputSwitch } from "primereact/inputswitch";

export default function Header() {
    const [isLightMode, setIsLightMode] = useState(true);

    const toggleTheme = () => {
        setIsLightMode((prevMode) => !prevMode);

        if (isLightMode) {
            document.documentElement.classList.remove('light-mode');
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
            document.documentElement.classList.add('light-mode');
        }
    };

    return (
        <div className="header">
            <div>
                <h1>Find your Country</h1>
            </div>
            <div className='darkmode'>
                <InputSwitch checked={!isLightMode} onChange={toggleTheme} />
            </div>
        </div>
    );
}



import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';


export default function BackButton() {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };


  return (
    <div className="button">
      <Button label="Back" onClick={handleGoBack} />

    </div>
  );
}



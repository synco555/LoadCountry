import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from './Componentes/home';
import './App.css';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';
const App = () => {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>

        </Routes>
        </BrowserRouter>
    );
};

export default App;

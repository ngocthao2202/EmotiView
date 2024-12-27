import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Predict from './pages/Predict/predict';
import Home from './pages';
import AboutUs from './pages/AboutUs/aboutus';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/predict" element={<Predict />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
};

export default AppRoutes;

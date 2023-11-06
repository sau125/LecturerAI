import {Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import React from "react";
import Home from "../pages/Home"

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer />
    </Suspense>
  );
};

export default Router;

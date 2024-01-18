// src/App.jsx
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";
import ProjectPage from "./components/Projects/ProjectPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

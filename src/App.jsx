import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Favourites from './components/Favourites';
import TechStack from './components/TechStack';
import GithubHeatmap from './components/GithubHeatmap';
import Certifications from './components/Certifications';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Contact />
      <Projects />
      <TechStack />
      <GithubHeatmap />
      <Certifications />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<main><Favourites /></main>} />
        </Routes>
        <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          Designed & Developed by <strong style={{ color: 'var(--text-primary)' }}>Kavya</strong><br />
          © 2026 All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

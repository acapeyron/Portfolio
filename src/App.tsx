import React from 'react';
import './tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Navbar from './components/NavBar';
import RandomDotsBackground from './components/RandomDotsBackground';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <RandomDotsBackground  />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

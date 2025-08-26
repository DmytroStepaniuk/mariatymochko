import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contacts from './Contacts';
import Blog from './Blog';
import '../styles/global.css';

const App: React.FC = () => (
  <BrowserRouter>
    <div className="site-bg">
      <nav className="navbar">
        <Link to="/">Головна</Link>
        <Link to="/about">Про себе</Link>
        <Link to="/services">Послуги</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/blog">Блог</Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;

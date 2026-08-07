import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [theme, setTheme] = useState('dark');
  const [isRotating, setIsRotating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500); // Matches CSS transition duration

    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
  };

  return (
    <header className="header">
      <div className="header-brand">
        <Link to="/" onClick={closeMenu}>Kavya</Link>
      </div>
      
      <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {isHome ? (
          <>
            <a href="#home" className="nav-link active" onClick={closeMenu}>Home</a>
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </>
        ) : (
          <Link to="/" className="nav-link" onClick={closeMenu}>← Back to Home</Link>
        )}
        
        <div className="dropdown" ref={moreRef}>
          <button 
            className={`nav-link more-btn ${isMoreOpen ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setIsMoreOpen(!isMoreOpen);
            }}
          >
            More <ChevronDown size={14} className={`chevron ${isMoreOpen ? 'open' : ''}`} />
          </button>
          
          {isMoreOpen && (
            <div className="dropdown-menu">
              <Link to="/favourites" className="dropdown-item" onClick={closeMenu}>Favourites</Link>
            </div>
          )}
        </div>
      </nav>

      <div className="header-actions">
        <div className="theme-toggle">
          <button aria-label="Toggle theme" onClick={toggleTheme}>
            <div className={`theme-icon-wrapper ${isRotating ? 'rotate' : ''}`}>
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            </div>
          </button>
        </div>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;

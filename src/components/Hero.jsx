import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [isAvatarSwapped, setIsAvatarSwapped] = useState(false);
  
  const roles = ['Software Developer', 'Backend AI Engineer', 'AI Builder'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleAvatar = () => {
    setIsAvatarSwapped(!isAvatarSwapped);
  };

  return (
    <section className="hero">
      <div className="hero-cover">
        <img src="/images/forgif.png" alt="Pixelated Cover" />
      </div>
      <div className="hero-profile-container">
        <div className="hero-avatar">
          <img className={`avatar-main ${isAvatarSwapped ? 'hidden' : ''}`} src="/images/profilenew.webp" alt="Kavya Nagariya" />
          <img className={`avatar-swap ${isAvatarSwapped ? '' : 'hidden'}`} src="/images/forprofileswap.jpg" alt="Kavya Nagariya Alternative" />
          <button className="avatar-swap-btn" onClick={toggleAvatar} aria-label="Swap Avatar" title="Swap Avatar">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="hero-info">
          <div className="hero-title-row">
            <h1 className="hero-name">Kavya Nagariya</h1>
          </div>
          <p className="hero-role fading-text" key={currentRoleIndex}>
            {roles[currentRoleIndex]}
          </p>
          <p className="hero-location">Lucknow, India</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

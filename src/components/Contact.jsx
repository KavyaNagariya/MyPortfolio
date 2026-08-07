import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section-divider" id="contact">
      <h2 className="title">Contact</h2>
      <div className="contact-links">
        <a href="https://github.com/KavyaNagariya" target="_blank" rel="noreferrer" className="pill">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          GitHub ↗
        </a>
        <a href="https://linkedin.com/in/kavya-nagariya-a55107318" target="_blank" rel="noreferrer" className="pill">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn ↗
        </a>
        <a href="https://x.com/nagariya_kavya" target="_blank" rel="noreferrer" className="pill">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
          X ↗
        </a>
        <a href="mailto:kavyanagaria402@gmail.com" className="pill">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Mail ↗
        </a>
        <a href="https://buymeacoffee.com/mehukavyanp" target="_blank" rel="noreferrer" className="pill">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
          Buy Me A Coffee ↗
        </a>
        <a href="https://drive.google.com/file/d/1b4SPwX_GVBPO221FWvmOTIXvbLhZtSwW/view?usp=sharing" target="_blank" rel="noreferrer" className="pill">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Resume ↗
        </a>
      </div>
    </section>
  );
};

export default Contact;

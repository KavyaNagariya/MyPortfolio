import React from 'react';
import './Favourites.css';

const Favourites = () => {
  return (
    <section className="favourites section-divider" id="favourites">
      <h2 className="title">Favourites</h2>
      <p className="subtitle" style={{marginBottom: '2rem'}}>A curated archive of my personal favorite books and games.</p>
      
      <div className="fav-category">
        <h3 className="category-title">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          Books
        </h3>
        <div className="masonry-grid">
          <div className="empty-placeholder" style={{height: '180px'}}>
            <span>Reading list coming soon...</span>
          </div>
        </div>
      </div>

      <div className="fav-category">
        <h3 className="category-title">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><path d="M6 12h4"></path><path d="M8 10v4"></path><circle cx="15" cy="13" r="1"></circle><circle cx="18" cy="11" r="1"></circle></svg>
          Games
        </h3>
        <div className="poster-grid">
          <div className="empty-placeholder" style={{aspectRatio: '2/3', height: '100%'}}>
            <span>Game list coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favourites;

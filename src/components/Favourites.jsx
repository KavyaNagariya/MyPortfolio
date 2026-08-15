import React from 'react';
import './Favourites.css';

const books = [
  {
    title: "Can't Hurt Me",
    author: 'David Goggins',
    image: "/images/Can'thurtmecover.jpg",
  },
];

const games = [
  {
    title: 'Sekiro: Shadows Die Twice',
    image: '/images/Sekiro Box Art - Sekiro_ Shadows Die Twice Art Gallery.jpg',
  },
  {
    title: 'Hollow Knight: Silksong',
    image: '/images/Hollow Knight_ Silksong – A Deadly Dance Through a Haunted Kingdom.jpg',
  },
];

const Favourites = () => {
  return (
    <section className="favourites section-divider" id="favourites">
      <h2 className="title">Favourites</h2>
      <p className="subtitle" style={{ marginBottom: '2rem' }}>
        A curated archive of personal books and games that shaped my mindset.
      </p>

      {/* Books Section */}
      <div className="fav-category">
        <h3 className="category-title">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          Books
        </h3>
        <div className="fav-grid">
          {books.map((book, idx) => (
            <div key={idx} className="fav-card">
              <div className="fav-img-wrapper">
                <img src={book.image} alt={book.title} className="fav-img" loading="lazy" />
              </div>
              <div className="fav-info">
                <h4 className="fav-item-title">{book.title}</h4>
                {book.author && <p className="fav-item-sub">{book.author}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Games Section */}
      <div className="fav-category">
        <h3 className="category-title">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
            <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
            <path d="M6 12h4"></path>
            <path d="M8 10v4"></path>
            <circle cx="15" cy="13" r="1"></circle>
            <circle cx="18" cy="11" r="1"></circle>
          </svg>
          Games
        </h3>
        <div className="fav-grid">
          {games.map((game, idx) => (
            <div key={idx} className="fav-card">
              <div className="fav-img-wrapper">
                <img src={game.image} alt={game.title} className="fav-img" loading="lazy" />
              </div>
              <div className="fav-info">
                <h4 className="fav-item-title">{game.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favourites;

import { useState } from 'react';
import './Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img 
            src="/src/assets/logo.png" 
            alt="TechnologuePro Logo" 
            className="logo" 
          />
          <div className="logo-text">
            <h1>TECHNOLOGUE<span className="pro">.pro</span></h1>
            <p>Ressources pédagogiques<br />pour l'enseignement technologique</p>
          </div>
        </div>
        <div className="header-right">
          <div className="auth-buttons">
            {isLoggedIn ? (
              <button className="auth-button" onClick={handleLogout}>
                Se déconnecter
              </button>
            ) : (
              <>
                <button className="auth-button" onClick={handleLogin}>
                  Se connecter
                </button>
                <button className="auth-button register-button">
                  S'inscrire
                </button>
              </>
            )}
          </div>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Rechercher sur TechnologuePro"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Rechercher
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header; 
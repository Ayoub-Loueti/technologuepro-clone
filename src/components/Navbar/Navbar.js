import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const navItems = [
    { id: 'accueil', label: 'ACCUEIL', icon: '🏠' },
    { id: 'ressources', label: 'RESSOURCES PÉDAGOGIQUES', icon: '📚' },
    { id: 'projets', label: 'PROJETS FIN D\'ÉTUDES', icon: '🎓' },
    { id: 'montages', label: 'MONTAGES ÉLECTRONIQUES', icon: '🔌' },
    { id: 'telechargements', label: 'TÉLÉCHARGEMENTS', icon: '📥' },
    { id: 'plus', label: 'PLUS', icon: '➕' },
    { id: 'contact', label: 'CONTACT', icon: '✉️' }
  ];

  const handleMouseEnter = (id) => {
    setActiveItem(id);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-items">
          {navItems.map((item) => (
            <li 
              key={item.id} 
              className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={`#${item.id}`} className="nav-link">
                <span className="icon" aria-hidden="true">{item.icon}</span>
                {item.label}
              </a>
              {item.id === 'ressources' && activeItem === 'ressources' && (
                <div className="dropdown-menu">
                  <ul>
                    <li><a href="#electronique">Électronique</a></li>
                    <li><a href="#informatique">Informatique</a></li>
                    <li><a href="#mecanique">Mécanique</a></li>
                    <li><a href="#robotique">Robotique</a></li>
                  </ul>
                </div>
              )}
              {item.id === 'plus' && activeItem === 'plus' && (
                <div className="dropdown-menu">
                  <ul>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#forum">Forum</a></li>
                    <li><a href="#faq">FAQ</a></li>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
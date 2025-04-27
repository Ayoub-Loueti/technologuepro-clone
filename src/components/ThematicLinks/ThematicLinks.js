import './ThematicLinks.css';

const ThematicLinks = () => {
  const links = [
    { name: 'Électronique', url: '#electronique' },
    { name: 'Microcontrôleurs', url: '#microcontroleurs' },
    { name: 'Automatisme', url: '#automatisme' },
    { name: 'Robotique', url: '#robotique' },
    { name: 'Projets', url: '#projets' },
    { name: 'Informatique', url: '#informatique' }
  ];

  return (
    <div className="thematic-links">
      <h2>LIENS THÉMATIQUES</h2>
      <div className="links-container">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="thematic-link">
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ThematicLinks;
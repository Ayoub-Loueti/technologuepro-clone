import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const menuLinks = [
    { label: 'Accueil', url: '#accueil' },
    { label: 'Cours Génie Electrique', url: '#genie-electrique' },
    { label: 'Cours Informatique', url: '#informatique' },
    { label: 'Cours Génie Mécanique', url: '#genie-mecanique' },
    { label: 'Montages Electroniques', url: '#montages' },
    { label: 'Téléchargements', url: '#telechargements' },
    { label: 'Recherche avancée', url: '#recherche' },
    { label: 'Contact', url: '#contact' }
  ];
  
  const downloadLinks = [
    { label: 'Proteus Library Manager (Bibliothèques Proteus)', url: '#download-1', date: '30/01/2020' },
    { label: 'Régulation PID d\'un four électrique pa...', url: '#download-2', date: '15/11/2017' },
    { label: 'Calculatrice basique avec PIC16F628A', url: '#download-3', date: '13/11/2017' },
    { label: 'Lecture et affichage de la température ...', url: '#download-4', date: '13/11/2017' },
    { label: 'Système de gestion d\'une file d\'attente...', url: '#download-5', date: '09/11/2017' },
    { label: 'Bibliothèque des modules TX433 et RX433...', url: '#download-6', date: '10/04/2014' }
  ];
  
  const recentMessages = [
    { label: 'recherche de projet de fin d\'année', url: '#message-1', date: '29/08/2018' },
    { label: 'commande numérique d\'un gradateur', url: '#message-2', date: '10/07/2018' },
    { label: 'Pandora Shines New Shining Way', url: '#message-3', date: '22/06/2018' },
    { label: 'Air Max 1 is one of the anticipated item...', url: '#message-4', date: '22/06/2018' },
    { label: '"Animal" Air Max 1 keeps canine theme', url: '#message-5', date: '22/06/2018' },
    { label: 'Nike Diversification Design', url: '#message-6', date: '22/06/2018' }
  ];

  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#facebook" className="social-link">
          <span>TechnologuePro</span>
        </a>
        <a href="#twitter" className="social-link">
          <span>@TechnologuePro</span>
        </a>
        <a href="mailto:abidi@technologuepro.com" className="social-link">
          <span>abidi@technologuepro.com</span>
        </a>
      </div>
      
      <div className="footer-content">
        <div className="footer-column">
          <h3>MENU</h3>
          <ul className="footer-list">
            {menuLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>TÉLÉCHARGEMENTS</h3>
          <ul className="footer-list">
            {downloadLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
                <span className="date">{link.date}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>DERNIERS MESSAGES</h3>
          <ul className="footer-list">
            {recentMessages.map((message, index) => (
              <li key={index}>
                <a href={message.url}>{message.label}</a>
                <span className="date">{message.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>© {currentYear} Technologue pro, cours électricité électronique informatique - © 2007 - {currentYear} Technologue pro - Ressources pédagogiques pour l'enseignement technologique en Tunisie</p>
        <p>Usage dans un cadre strictement académique</p>
      </div>
      
      <div className="footer-bottom">
        <p>Technologue: cours en ligne gratuit en électricité, électronique, informatique industrielle et mécanique pour l'enseignement technologique en Tunisie et dans le monde francophone, microcontrôleurs, une base de données de TP, projets fin d'études et un annuaire de ressources pédagogiques.</p>
        <p>
          <a href="#plan">Plan du site</a> | 
          <a href="#about">Qui somme nous?</a> | 
          <a href="#privacy">Confidentialité</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
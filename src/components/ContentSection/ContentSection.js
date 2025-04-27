import './ContentSection.css';

const ContentSection = ({ title, items }) => {
  return (
    <div className="content-section">
      <h2 className="section-title">{title}</h2>
      <ul className="content-list">
        {items.map((item, index) => (
          <li key={index} className="content-item">
            <a href="#" className="item-link">
              <span className="item-title">{item.title}</span>
              <span className="item-date">{item.date}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentSection;
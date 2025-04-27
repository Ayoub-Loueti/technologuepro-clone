import './TopSearch.css';

const TopSearch = () => {
  const searchTerms = [
    { term: "proteus", color: "green", size: "medium" },
    { term: "ISIS", color: "pink", size: "large" },
    { term: "PCF8583", color: "pink", size: "small" },
    { term: "ARES", color: "blue", size: "large" },
    { term: "electronique", color: "red", size: "large" },
    { term: "variateur de vitesse", color: "teal", size: "medium" },
    { term: "PIC C", color: "orange", size: "small" },
    { term: "cours", color: "gray", size: "small" },
    { term: "programmateur usb", color: "purple", size: "large" },
    { term: "mikropascal", color: "red", size: "large" },
    { term: "projets", color: "gray", size: "small" },
    { term: "bibliothèque isis", color: "blue", size: "medium" },
    { term: "DS1307", color: "black", size: "small" },
    { term: "16F877", color: "green", size: "small" }
  ];

  return (
    <section className="top-search-section">
      <div className="top-search-container">
        <h2>TOP RECHERCHE</h2>
        <div className="search-terms">
          {searchTerms.map((item, index) => (
            <a 
              key={index} 
              href={`#search-${item.term}`}
              className={`search-term size-${item.size} color-${item.color}`}
            >
              {item.term}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSearch;
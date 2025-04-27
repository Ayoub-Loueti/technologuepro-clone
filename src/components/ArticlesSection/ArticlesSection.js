import './ArticlesSection.css';

const ArticlesSection = () => {
  const newArticles = [
    { id: 1, title: "Solution gestion de l'énergie EnergySave", category: "Informatique" },
    { id: 2, title: "SEFRA2015 : La pile à combustible du matériau aux systèmes", category: "Séminaires" },
    { id: 3, title: "Séminaire sur les Energies Renouvelables et leurs Applications: SERA 2015", category: "Séminaires" },
    { id: 4, title: "Le Troisième Séminaire de Formation et de Recherche Appliquée SEFRA 2014", category: "Séminaires" }
  ];

  const topArticles = [
    { id: 1, title: "Astuces: Augmenter la vitesse de votre connexion internet", category: "Séminaires" },
    { id: 2, title: "Listes des cours disponibles sur TECHNOLOGUE pro", category: "Séminaires" },
    { id: 3, title: "Robot bras manipulateur - Le bras de SIWAN", category: "Séminaires" },
    { id: 4, title: "Les circuits logiques programmables FPGA !", category: "Séminaires" }
  ];

  return (
    <section className="articles-section">
      <div className="articles-container">
        <h2>ARTICLES</h2>
        <div className="articles-columns">
          <div className="articles-column">
            <h3>
              <span className="icon">📄</span>
              Les nouveautés
            </h3>
            <ol className="articles-list">
              {newArticles.map(article => (
                <li key={article.id}>
                  <a href={`#article-${article.id}`}>
                    {article.title}
                  </a>
                  <span className="category">({article.category})</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="articles-column">
            <h3>
              <span className="icon">📄</span>
              Le Top 5
            </h3>
            <ol className="articles-list">
              {topArticles.map(article => (
                <li key={article.id}>
                  <a href={`#article-${article.id}`}>
                    {article.title}
                  </a>
                  <span className="category">({article.category})</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
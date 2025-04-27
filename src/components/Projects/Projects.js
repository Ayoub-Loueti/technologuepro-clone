import './Projects.css';

const Projects = () => {
  const newProjects = [
    { id: 1, title: "Commande de l'éclairage public avec affichage de la température, à base de PIC16F876" },
    { id: 2, title: "Robot suiveur de courbe supporteur d'une camera" },
    { id: 3, title: "Carte interface de supervision par le réseau GSM utilisant un PIC16F877" },
    { id: 4, title: "Robot suiveur de ligne à base de PIC16F877" },
    { id: 5, title: "Commande de l'éclairage public et mesure de la température à base de PIC 16F877" }
  ];

  const topProjects = [
    { id: 1, title: "Étude de conception et de réalisation d'un suiveur de soleil" },
    { id: 2, title: "Variateur de vitesse pour moteur 12V...24V DC" },
    { id: 3, title: "Carte interface de supervision par le réseau GSM utilisant un PIC16F877" },
    { id: 4, title: "Commande de l'éclairage public avec affichage de la température, à base de PIC16F876" },
    { id: 5, title: "Robot suiveur de ligne à base de PIC16F877" }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>PROJETS FIN D'ÉTUDES</h2>
        <div className="projects-columns">
          <div className="projects-column">
            <h3>
              <span className="icon">🎓</span>
              Les nouveautés
            </h3>
            <ol className="projects-list">
              {newProjects.map(project => (
                <li key={project.id}>
                  <a href={`#project-${project.id}`}>
                    {project.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div className="projects-column">
            <h3>
              <span className="icon">🎓</span>
              Le Top 5
            </h3>
            <ol className="projects-list">
              {topProjects.map(project => (
                <li key={project.id}>
                  <a href={`#project-${project.id}`}>
                    {project.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
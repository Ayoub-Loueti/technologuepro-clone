import './ElectronicAssemblies.css';

const ElectronicAssemblies = () => {
  const newAssemblies = [
    { id: 1, title: "Commander un robot Arduino par Bluetooth (exemple complet)" },
    { id: 2, title: "Voltmètre numérique 3 digits avec PIC16F877" },
    { id: 3, title: "Drivers et logiciel du programmateur USB pour Windows 7 et 8" },
    { id: 4, title: "Carte d'interface USB Labview - PIC18F4550 via la communication HID" },
    { id: 5, title: "Détecteur d'obstacles et distance avec Ultrason" }
  ];

  const topAssemblies = [
    { id: 1, title: "Variateur de vitesse pour moteur à courant continu par PIC16F876 en MLI (PWM) 12V" },
    { id: 2, title: "Programmateur de PIC sur le port USB autoalimenté" },
    { id: 3, title: "Chargeur pour batteries au plomb 12V12AH par PIC16F876" },
    { id: 4, title: "Carte d'interface USB - PIC18F2550: LCD, 4E/4S Numériques 1E Analogique" },
    { id: 5, title: "Mini Programmateur de PIC sur le port USB" }
  ];

  return (
    <section className="assemblies-section">
      <div className="assemblies-container">
        <h2>MONTAGES ÉLECTRONIQUES</h2>
        <div className="assemblies-columns">
          <div className="assemblies-column">
            <h3>
              <span className="icon">🔌</span>
              Les nouveautés
            </h3>
            <ol className="assemblies-list">
              {newAssemblies.map(assembly => (
                <li key={assembly.id}>
                  <a href={`#assembly-${assembly.id}`}>
                    {assembly.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div className="assemblies-column">
            <h3>
              <span className="icon">🔌</span>
              Le Top 5
            </h3>
            <ol className="assemblies-list">
              {topAssemblies.map(assembly => (
                <li key={assembly.id}>
                  <a href={`#assembly-${assembly.id}`}>
                    {assembly.title}
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

export default ElectronicAssemblies;
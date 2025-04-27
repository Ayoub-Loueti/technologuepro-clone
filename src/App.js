import { useState } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import ContentSection from './components/ContentSection/ContentSection'
import ThematicLinks from './components/ThematicLinks/ThematicLinks'
import ArticlesSection from './components/ArticlesSection/ArticlesSection'
import ElectronicAssemblies from './components/ElectronicAssemblies/ElectronicAssemblies'
import Projects from './components/Projects/Projects'
import TopSearch from './components/TopSearch/TopSearch'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Navbar />
      <main>
        <HeroSection />
        <div className="content-container">
          <div className="main-content">
            <ContentSection
              title="DERNIERS COURS"
              items={[
                { title: "Circuits Logiques Programmables (FPGA, DSP)", date: "14/10/2024" },
                { title: "Systèmes Robotisés", date: "14/10/2024" },
                { title: "Systèmes logiques 2", date: "14/10/2024" },
                { title: "Systèmes Echantillonnés", date: "14/10/2024" },
                { title: "Électronique", date: "14/10/2024" }
              ]}
            />
            <div className="video-section">
              <h2>DERNIÈRE VIDEO</h2>
              <div className="video-container">
                <div className="video-placeholder">
                  <div className="play-button"></div>
                </div>
              </div>
            </div>
            <ThematicLinks />
          </div>
        </div>
        <ArticlesSection />
        <ElectronicAssemblies />
        <Projects />
        <TopSearch />
        <Footer />
      </main>
    </div>
  )
}

export default App 
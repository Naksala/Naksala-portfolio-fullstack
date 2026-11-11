import KnowledgeGraph from "./components/KnowledgeGraph.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechTicker from "./components/TechTicker.jsx";
import About from "./components/About.jsx";
import Research from "./components/Research.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useTheme from "./hooks/useTheme.js";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <KnowledgeGraph color={theme === "dark" ? "#e8845a" : "#b4532a"} />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TechTicker />
        <About />
        <Research />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

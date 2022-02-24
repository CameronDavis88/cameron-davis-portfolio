import Intro from './components/Intro';
import Projects from './components/Projects';
import Experience from './components/Skills';
import Contact from './components/Contact';
import './styles/App.css';
import About from './components/About';

function App() {
  return (
    <section className="app-container">
    <Contact />
    <Intro />
    <About/>
    <Projects />
    <Experience />
  </section>
  );
};

export default App;

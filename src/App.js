// import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Experience from './components/Skills';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import './styles/App.css';
import About from './components/About';

function App() {
  return (
    <section className="app-container">
    {/* <Header /> */}
    <Contact />
    <Intro />
    <About/>
    <Projects />
    <Experience />
    {/* <Contact /> */}
    {/* <Footer /> */}
  </section>
  );
};

export default App;

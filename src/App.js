// import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Experience from './components/Skills';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <section className="app-container">
    {/* <Header /> */}
    <Intro />
    <Contact />
    <Projects />
    <Experience />
    {/* <Contact /> */}
    {/* <Footer /> */}
  </section>
  );
};

export default App;

import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTop';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;
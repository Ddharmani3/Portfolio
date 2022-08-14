import './App.css';
import Navbar from './components/navbar';
import TitleBanner from './components/titlebanner';
import Skills from './components/skills';
import About from './components/about';
import Footer from './components/footer';
import Project from './components/project';
import Contact from './components/contact';
import { BrowserRouter} from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {
  Aos.init();
  return (
    <div >
      <Navbar />
     

      <BrowserRouter>
        <div data-aos="zoom-out"  data-aos-easing="ease-in-out" id="home">
          <TitleBanner />

        </div>
        <div id="about">
          <About />

        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="contact">
          <Contact />

        </div>
        <Footer />
      </BrowserRouter>
      </div>
    
  );
}

export default App;

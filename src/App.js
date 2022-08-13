import './App.css';
import Navbar from './components/navbar';
import TitleBanner from './components/titlebanner';
import Skills from './components/skills';
import About from './components/about';
import Footer from './components/footer';
import Project from './components/project';
import Contact from './components/contact';

function App() {
  return (
    <div>
       <Navbar/>
      <TitleBanner/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

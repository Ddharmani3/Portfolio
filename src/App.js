import './App.css';
import Navbar from './components/navbar';
import TitleBanner from './components/titlebanner';
import Skills from './components/skills';
import About from './components/about';

function App() {
  return (
    <div>
       <Navbar/>
      <TitleBanner/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;

import  Navbart  from './components/Navbart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Aboutme from './components/Aboutme';
import Skill from './components/Skill';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbart />
      <Banner />
      <Aboutme />
      <Skill/>
      <Education/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
  
export default App;

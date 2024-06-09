import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import ProgressBar from './Components/ProgressBar';
import Projects from './Pages/Projects/Projects';
import Contact from './Components/Contact/Contact';
import ContactMe from './Pages/ContactMe/ContactMe';
import Skills from './Pages/Skills/Skills';
import AboutPage from './Pages/AboutPage/AboutPage';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import CursorShadow from './Components/CursorShadow/CursorShadow';
import LandingPage from './Pages/LandingPage/LandingPage';
import Typing from './Components/Typing/Typing';
import CardComponent from './Components/CardComponent/CardComponent';


function App() {
  return (

    <div className="App">
        <NavBar />
        <LandingPage/>
        <AboutPage/>
        <Skills/>
        <Projects/>
        <Contact/>
        <ContactMe/>
    </div>
  );
}
export default App;
 
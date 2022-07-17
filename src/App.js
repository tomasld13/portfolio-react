import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Proyects from "./components/Proyects/Proyects"
import Technologies from "./components/Technologies/Technologies.jsx"
import Nav from './components/Nav/Nav';
function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Technologies/>
      <Proyects/>
      <Contact/>
    </div>
  );
}

export default App;

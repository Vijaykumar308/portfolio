import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Topbar from "./Components/Topbar/Topbar";
import Sidebar from './Components/Sidebar/Sidebar';
import MobileNav from "./Components/MobileNavbar/MobileNav"
import { Home } from "./Pages/Home/Home";
import { AboutMe } from "./Pages/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import WorkExperince from "./Pages/WorkExperince/WorkExperince";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Topbar />
      <MobileNav/> 
      <div className='container'>
          <Sidebar /> 
        <div className='contant'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/work-experince' element={<WorkExperince />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

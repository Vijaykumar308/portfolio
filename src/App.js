import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Topbar from "./Components/Topbar/Topbar";
import Sidebar from './Components/Sidebar/Sidebar';
import { Home } from "./Pages/Home/Home";
import { AboutMe } from "./Pages/AboutMe/AboutMe";
import WorkExperince from "./Pages/WorkExperince/WorkExperince";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Topbar />
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
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

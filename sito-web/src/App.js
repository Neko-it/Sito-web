import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About'
//import Code from './pages/Code'
//import Software from './pages/Software'
import Contact from './pages/Contact'
import './App.css';

//import { faPaw } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// <FontAwesomeIcon icon={faPaw} color="Red"/>


function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar></Sidebar>
        <span className='tag-top'>&lt;Neko&gt;</span> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Code" element={<Main/>}/>
            <Route path="/Software" element={<Main/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes> 
        <span className='tag-bottom'>&lt;/ Matteo Frigo&gt;</span>
        </BrowserRouter>
      
    </div>
  );
}

export default App;

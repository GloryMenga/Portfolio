import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Works from "./pages/Works.jsx";
import Project from './pages/Project.jsx';

import './App.css'

function App() {

  return (
      <BrowserRouter basename='/Portfolio/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

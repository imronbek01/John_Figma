import React from 'react'
import Home from "./Home"
import Blog from "./Blog"
import Work from "./Work"
import Contact from "./Contact"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/works" element={<Work />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

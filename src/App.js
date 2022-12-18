import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Gallery from './pages/Gallery';
import Landing from './pages/Landing/Landing';
import Footer from './components/Footer';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route exact path='/gallery' element={<Gallery/>} />
          <Route exact path='/portfolio' element={<Portfolio/>} />
          <Route exact path='/education' element={<Education/>} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  )
}
export default App;
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Teaching from './Teaching';
import Contact from './Contact';
import Menu from './components/Menu';
import Footer from './components/Footer';
import AboutMe from './AboutMe';
function App() {

  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route
          path="/personal-info"
          element={<AboutMe />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </Router>
  );
}



export default App;

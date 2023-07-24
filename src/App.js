import React from 'react';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Credentials from './Components/Credentials';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
    

      <Header />
      
      <Router>
      <Routes>
        <Route exact path="/" element={<Content/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/credentials" element={<Credentials />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />

      </Routes>
      </Router>
      <Footer />
    </div>
    
  );
}

export default App;

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

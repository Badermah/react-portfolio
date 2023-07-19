import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Header from "./components/Header";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
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

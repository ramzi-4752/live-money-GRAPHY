import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbroad from "./Dashbroad";
import Header from "./header";
import Contact from "./Contact";
import Home from "./Home";
import Footer from "./Footer";



const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashbroad" element={<Dashbroad />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
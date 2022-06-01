import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Tokenomics from "./pages/Tokenomics";
import Roadmap from "./pages/Roadmap";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="tokenomics" element={<Tokenomics />} />
        <Route path="roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

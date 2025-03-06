import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import WelcomePage from "./Pages/welcome";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/view-data" element={<Home />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
};

export default App;

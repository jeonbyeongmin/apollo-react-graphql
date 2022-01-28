import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

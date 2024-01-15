import React from "react";
import "./App.css";
import Homepage from "./components/body/homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YourComponent from "./components/property/properties";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/properties" element={<YourComponent />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <Router>
        <Navbar></Navbar>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import HeaderNav from "./components/HeaderNav/header-nav";

function App() {
  return (
    <Router>
        <HeaderNav></HeaderNav>
    </Router>
  );
}

export default App;

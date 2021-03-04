import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import HeaderNav from "./components/HeaderNav/header-nav";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import KidsCorner from "./components/KidsCorner/KidsCorner";
import KnowYourOcean from "./components/KnowYourOcean/KnowYourOcean";
import Publications from "./components/Publications/Publications";
import TakeAction from "./components/TakeAction/TakeAction";
import Home from "./components/Home";

function App() {
  return (
    <Router>
        <HeaderNav></HeaderNav>
        <Route exact path="/" component={Home} />
        <Route exact path="/know-your-ocean" component={KnowYourOcean} />
        <Route exact path="/take-action" component={TakeAction} />
        <Route exact path="/kids-corner" component={KidsCorner} />
        <Route exact path="/publications" component={Publications} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
    </Router>
  );
}

export default App;

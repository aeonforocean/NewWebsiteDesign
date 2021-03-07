import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import HeaderNav from "./pages/HeaderNav/header-nav";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import KidsCorner from "./pages/KidsCorner/KidsCorner";
import KnowYourOcean from "./pages/KnowYourOcean/KnowYourOcean";
import Publications from "./pages/Publications/Publications";
import TakeAction from "./pages/TakeAction/TakeAction";
import Home from "./pages/Home";

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

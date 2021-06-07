import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import HeaderNav from "./components/HeaderNav/header-nav";
import OurStory from "./pages/AboutUs/OurStory";
import OurProgram from "./pages/AboutUs/OurProgram";
import OurTeam from "./pages/AboutUs/OurTeam";
import ContactUs from "./pages/ContactUs/ContactUs";
import KidsCorner from "./pages/KidsCorner/KidsCorner";
import KnowYourOcean from "./pages/KnowYourOcean";
import Publications from "./pages/Publications/Publications";
import TakeAction from "./pages/TakeAction/TakeAction";
import BecomeK2WAmbassador from "./pages/TakeAction/BecomeK2WAmbassador";
import CommonSensePlastic from "./pages/TakeAction/CommonSensePlastic";
import Home from "./pages/Home";
import RequestASpeaker from "./pages/ContactUs/RequestASpeaker";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <HeaderNav></HeaderNav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/know-your-ocean" component={KnowYourOcean} />
          <Route exact path="/take-action" component={TakeAction} />
          <Route exact path="/become-k2w-ambassador" component={BecomeK2WAmbassador} />
          <Route exact path="/common-sense-plastic" component={CommonSensePlastic} />
          {/* <Route exact path="/kids-corner" component={KidsCorner} /> */}
          {/* <Route exact path="/publications" component={Publications} /> */}
          <Route exact path="/our-story" component={OurStory} /> 
          <Route exact path="/our-program" component={OurProgram} />
          <Route exact path="/our-team" component={OurTeam} /> 
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/request-speaker" component={RequestASpeaker} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;

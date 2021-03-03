import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-xl navbar-light d-print fixed-top" id="mainNav">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html"><img className="img-fluid to-png" src="static/img/weblogo.webp" alt="Aeon for Ocean Logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" data-content="A better knowledge about our world oceans and species" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Known Your Ocean
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item nav-link" href="knowyourocean.html">Know Your Ocean</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item nav-link" href="knowyourocean/worldocean.html">The World Ocean</a></li>
                                <li><a className="dropdown-item nav-link" href="knowyourocean/landtoocean.html">Land to Ocean</a></li>
                                <li><a className="dropdown-item nav-link" href="knowyourocean/marinehabits.html">Marine Habit</a></li>
                                <li><a className="dropdown-item nav-link" href="knowyourocean/endangeredspecies.html">Endangered Species</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" data-content="What can we do to help the World Oceans?" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Take Action
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item nav-link" href="takeaction.html">Take Action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item nav-link" href="takeaction/ambassador.html">Become a K2W Ambassador</a></li>
                                <li><a className="dropdown-item nav-link" href="takeaction/commonsenseplastic.html">Common Sense Plastic</a></li>
                                <li><a className="dropdown-item nav-link" href="index.html#">Krill2Whale Events</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Kids Corner
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item nav-link" href="kidscorner.html">Kids Corner</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item nav-link" href="kidscorner/funandplay.html">Fun and Play</a></li>
                                <li><a className="dropdown-item nav-link" href="kidscorner/videos.html">Videos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Publications
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item nav-link" href="publications.html">Publications</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item nav-link" href="publications/endorsement.html">Endorsement</a></li>
                                <li><a className="dropdown-item nav-link" href="publications/newsletter.html">Newsletter</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About Us
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item nav-link" href="about.html">Our Story</a></li>
                                <li><a className="dropdown-item nav-link" href="about/team.html">Our Team</a></li>
                                <li><a className="dropdown-item nav-link" href="k2w.html">Our Program</a></li>
                                <li><a className="dropdown-item nav-link" href="about/journey.html">Our Journey</a></li>
                                <li><a className="dropdown-item nav-link" href="about/board.html">Our Board</a></li>
                                <li><a className="dropdown-item nav-link" href="about/partners.html">Partners</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Contact Us
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item nav-link" href="contact.html">Contact Us</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item nav-link" href="contact.html">Request a Speaker</a></li>
                                <li><a className="dropdown-item nav-link" href="https://www.volunteermatch.org/search/org1107201.jsp" target="_blank">Volunteer With Us</a></li>
                                <li><a className="dropdown-item nav-link" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PRENP8LGRCHMA&source=url" target="_blank">Donate</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
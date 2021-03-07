import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../img/weblogo.webp"
import "./style.css"

class HeaderNav extends Component{
    constructor(props) {
        super(props);
        this.state =({
            key: "home"
        })
        this.handleSelect = this.handleSelect.bind(this)

    }

    handleSelect(key){
        this.setState({
            key: key
        })
        alert(`selected ${key}`)
    }

    render() {
        return(
            <Navbar expand="lg" bg="light" variant="light">
                <Navbar.Brand><Link to="/"><img className="main-logo" src={logo} alt="Aeon for Ocean Logo"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="Know Your Ocean" id="collapsible-nav-dropdown">
                            <NavDropdown.Item ><Link to="/know-your-ocean">Know Your Ocean</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/the-world-ocean">The World Ocean</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/land-to-ocean">Land To Ocean</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/marine-habitat">Marine Habitat</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/endangered-species">Endangered Species</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Take Action" id="collapsible-nav-dropdown">
                            <NavDropdown.Item ><Link to="/take-action">Take Action</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/become-k2w-ambassador">Become A K2W Ambassador</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/common-sense-plastic">Common Sense Plastic</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/krill2whale-events">Krill2Whale Events</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Kids Corner" id="collapsible-nav-dropdown">
                            <NavDropdown.Item ><Link to="/kids-corner">Kids Corner</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/fun-and-play">Fun and Play</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/videos">Videos</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Publications" id="collapsible-nav-dropdown">
                            <NavDropdown.Item ><Link to="/publications">Publications</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/endorsements">Endorsements</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/newsletters">Newsletters</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About Us" id="collapsible-nav-dropdown">
                            <NavDropdown.Item ><Link to="/about-us">About Us</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/our-story">Our Story</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/our-team">Our Team</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/our-program">Our Program</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/our-journey">Our Journey</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/our-board">Our Board</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/partners">Partners</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Contact Us" id="collapsible-nav-dropdown">
                            <NavDropdown.Item ><Link to="/contact-us">Contact Us</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/request-speaker">Request A Speaker</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/volunteer">Volunteer With Us</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Donate">Donate</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HeaderNav;
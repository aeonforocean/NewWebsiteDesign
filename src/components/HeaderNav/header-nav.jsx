import React, { Component } from "react";
//import { Link } from "react-router-dom";
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
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Brand href="#home"><img className="main-logo" src={logo} alt="Aeon for Ocean Logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Know Your Ocean" id="nav-dropdown">
                            <NavDropdown.Item eventKey="Basic Pricing">Basic</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Corporate Pricing">Corporates</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item eventKey="Enterprise pricing">Enterprise</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Take Action" id="nav-dropdown">
                            <NavDropdown.Item eventKey="Basic Pricing">Basic</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Corporate Pricing">Corporates</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item eventKey="Enterprise pricing">Enterprise</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Kids Corner" id="nav-dropdown">
                            <NavDropdown.Item eventKey="Basic Pricing">Basic</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Corporate Pricing">Corporates</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item eventKey="Enterprise pricing">Enterprise</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Publications" id="nav-dropdown">
                            <NavDropdown.Item eventKey="Basic Pricing">Basic</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Corporate Pricing">Corporates</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item eventKey="Enterprise pricing">Enterprise</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About Us" id="nav-dropdown">
                            <NavDropdown.Item eventKey="Basic Pricing">Basic</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Corporate Pricing">Corporates</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item eventKey="Enterprise pricing">Enterprise</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Contact Us" id="nav-dropdown">
                            <NavDropdown.Item eventKey="Basic Pricing">Basic</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Corporate Pricing">Corporates</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item eventKey="Enterprise pricing">Enterprise</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HeaderNav;
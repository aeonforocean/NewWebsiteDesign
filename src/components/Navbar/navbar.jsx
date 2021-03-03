import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import logo from "../../img/weblogo.webp"
import "../../css/clean-blog.css"

class Navbar extends Component{
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
            <Nav variant="pills" activeKey="1" 
                >
                <Nav.Item>
                    <Nav.Link eventKey="home" href="#/home">
                        <img class="img-fluid to-png navbar-brand" src={logo} alt="Aeon for Ocean Logo"/>
                    </Nav.Link>
                </Nav.Item>
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
        );
    }
}

export default Navbar;
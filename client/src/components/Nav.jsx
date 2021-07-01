import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

export class Nav extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to="#home">Home</Nav.Link>
                    <Nav.Link to="#features">Features</Nav.Link>
                    <Nav.Link to="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Nav

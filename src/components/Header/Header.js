import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown title="Games" id="basic-nav-dropdown">
        <NavDropdown.Item href="#games">Index</NavDropdown.Item>
        <NavDropdown.Item href="#show">Find Your Games</NavDropdown.Item>
      </NavDropdown>
    <NavDropdown title="Profile" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Friend Requests</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
        <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
      </NavDropdown>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link to="/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      Clique
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

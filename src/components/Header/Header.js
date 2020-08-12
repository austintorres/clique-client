import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown title="Apparel" id="basic-nav-dropdown">
      <NavDropdown.Item>T-Shirts</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>Sweatshirts & Hoodies</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>Hats</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>Accessories</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Gaming" id="basic-nav-dropdown">
      <NavDropdown.Item href="#games">Show All Games</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#create">Create A Game</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
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
  <Navbar className="color-nav" variant="dark" expand="md">
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

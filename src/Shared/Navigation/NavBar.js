import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./NaviGation.css";

const NavBar = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar style={{ backgroundColor: "black" }} expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white", color: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} className="text-light" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} className="text-light" to="/allswitches">
              Switches
            </Nav.Link>
            {user?.email ? (
              <>
                <Nav.Link as={NavLink} className="text-light" to="/dashboared">
                  Dashboared
                </Nav.Link>
                <Nav.Link as={NavLink} className="text-success" to="/">
                  {user?.displayName}
                </Nav.Link>

                <button onClick={logout} className="btn-grad-logout">
                  Log out
                </button>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} className="text-light" to="/signup">
                  sign up
                </Nav.Link>
                <Nav.Link as={NavLink} className="text-light" to="/login">
                  Log in
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary" sticky="top">
      <Container>
        <Nav className="me-auto">
          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>
        </Nav>

        <Nav className="justify-content-end">
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

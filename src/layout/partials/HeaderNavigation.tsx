import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const HeaderNavigation: React.FC = () => {
  const generateClassName = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? "navbar-link navbar-link--active" : "navbar-link";
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="navbar px-2"
        variant="dark"
        bg="dark"
      >
        <Container>
          <Navbar.Brand className="text-info">
            <span className="text-primary">P</span>resto Movies
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="#navBarScroll"
          />
          <Navbar.Collapse id="navBarScroll">
            <Nav className="me-auto text-center">
              <NavLink className={generateClassName} to={"/"}>
                Now Playing
              </NavLink>
              <NavLink className={generateClassName} to={"/popular"}>
                Most Popular
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavigation;

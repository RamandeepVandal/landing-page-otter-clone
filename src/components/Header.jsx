import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" style={{backgroundColor: '#f8f6f5'}}>
      <Container>
        <Navbar.Brand className="d-lg-none nav-link nav-brand fs-1 lh-lg">Otter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav>
            <Nav.Link className="fs-5 nav-link me-2">Parent</Nav.Link>
            <Nav.Link className=" fs-5 nav-link me-2">Sitters</Nav.Link>
            <Nav.Link className="fs-5 nav-link me-2">Trust & Safety</Nav.Link>
            <Nav.Link className=" fs-5 nav-link me-2">Blog</Nav.Link>
          </Nav>

          <Navbar.Brand className="fs-1 lh-lg ms-auto me-auto d-none d-lg-block nav-link nav-brand">
            Otter
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link className="fs-5 nav-link me-2">Log in</Nav.Link>
           <button className="btn btn-light fs-5 nav-link nav-btn">Sign up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

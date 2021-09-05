import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Navigation() {
  return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="/" className="mx-2">Dreaming of Noodles</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link key='0' href='/tags/bread'>Bread</Nav.Link>
              <Nav.Link key='1' href='/tags/japan'>Japan</Nav.Link>
              <Nav.Link key='2' href='/tags'>Recipes by Tag</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

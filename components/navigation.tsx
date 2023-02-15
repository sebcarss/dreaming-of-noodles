import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

type NavigationProps = {
  preview: boolean;
}

export default function Navigation({ preview }: NavigationProps) {
  if (!preview) {
    return (
      <Navbar className="color-nav" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/" className="mx-2">Dreaming of Noodles</Navbar.Brand>
      </Navbar>
    ); 
  }

  return (
    <Navbar className="color-nav" variant="dark"expand="lg" fixed="top">
        <Navbar.Brand href="/" className="mx-2">Dreaming of Noodles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link key='0' href='/japan'>Japan</Nav.Link>
            <Nav.Link key='1' href='/recipe-index'>Recipe Index</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
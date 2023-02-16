import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const cardStyle: object = {
  textAlign: "center",
  fontSize: "1rem",
  width: "auto",
  boxShadow: "0 10px 10px rgba(0,0,0,.2)",
  color: 'black'
};

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
    <Navbar className="color-nav" variant="dark"expand="lg" fixed="top" style={cardStyle}>
        <Navbar.Brand href="/" className="mx-2">Dreaming of Noodles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ textAlign: "left" }}>
            <Nav.Link key='0' href='/japan' style={{ color: '#db5004' }}>Japan</Nav.Link>
            <Nav.Link key='1' href='/recipe-index' style={{ color: '#db5004' }}>Recipe Index</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

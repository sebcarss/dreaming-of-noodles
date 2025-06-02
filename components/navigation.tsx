import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link';
import Container from 'react-bootstrap/Container';


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
    <Navbar collapseOnSelect className="color-nav" variant="dark" expand="lg" fixed="top" style={cardStyle}>
      <Container>
        <Navbar.Brand href="/" className="mx-2">Dreaming of Noodles</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ textAlign: "left" }}>
            <Nav.Item>
              <Nav.Link as={Link} eventKey='0' href="/japan" style={{ color: '#db5004' }}>Japan</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} eventKey='1' href='/recipe-index' style={{ color: '#db5004' }}>Recipe Index</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

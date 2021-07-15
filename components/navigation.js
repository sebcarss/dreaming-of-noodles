import Navbar from 'react-bootstrap/navbar'
import Nav from 'react-bootstrap/nav'

export default function Navigation({ tagLinkData }) {
  const tagLinks = tagLinkData.map((tagData, index) => {
    const path = "/tags/" + tagData.slug;

    return (
      <Nav.Link href={path}>{tagData.title}</Nav.Link>
    );
  });

  return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="/" className="mx-2">In Search of Ramen</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {tagLinks}
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

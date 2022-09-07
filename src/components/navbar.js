import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";

export default function BasicExample() {
  return (
    <Navbar bg="transparent" expand="lg" style={{height: '200px'}} classe="col-sm-12" className="navbar">
      <Container>
        <Navbar.Brand href="#home" id='navbarbrand'>
        <img
              alt=""
              src={"./LOGO.jpg"}
              width={100}
              height={100}
              className="d-inline-block align-top"
              id='navlogo'
            />{' '}
            ANTK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto justify-content-end" style={{marginLeft: 'auto'}} id='navtext'>
            <Nav.Link href="#home">Produits</Nav.Link>
            <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
            <Nav.Link href="#Roadmap">Tokenomics</Nav.Link>
            <Nav.Link href="#Roadmap">Réseaux</Nav.Link>
            <Nav.Link href="#Roadmap">Équipe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
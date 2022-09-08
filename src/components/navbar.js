import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";

export default function frNav() {
  return (
    <Navbar
      bg="transparent"
      expand="lg"
      style={{ height: "200px" }}
      classe="col-sm-12"
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="#home" id="navbarbrand">
          <img
            alt=""
            src={"./LOGO.jpg"}
            width={100}
            height={100}
            className="d-inline-block align-top"
            id="navlogo"
          />{" "}
          ANTK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav
            className="me-auto justify-content-end"
            style={{ marginLeft: "auto" }}
            id="navtext"
          >
            <Nav.Link href="#produit">Produits</Nav.Link>
            <Nav.Link href="#Roadmap">Tokenomics</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1cuqIWFdV92YhCVb6wRPh-mlzObRxbFDa/view?usp=sharing"
              target="_blank"
            >
              Roadmap
            </Nav.Link>
            <Nav.Link href="#team">Équipe</Nav.Link>
            {/* <Nav.Link
              href="https://drive.google.com/file/d/1SdY1avUtXeHnZzJj9KVjpyPcpB8_6r2G/view?usp=sharing"
              target="_blank"
            >
              Whitepaper
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

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
            src={"./LOGO.png"}
            width={120}
            height={120}
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
            <Nav.Link
              href="https://drive.google.com/file/d/1p2QrpVgWB9KzuPgHOaOec37lWutj7co4/view?usp=sharing"
              target="_blank"
            >
              Whitepaper
            </Nav.Link>
            <Nav.Link href="#tokenomics" >Tokenomics</Nav.Link>
            <Nav.Link
              href="#roadmap"
            >
              Roadmap
            </Nav.Link>
            <Nav.Link href="#team">Équipe</Nav.Link>
            <Nav.Link href="#aide">
              Aide
            </Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1p2QrpVgWB9KzuPgHOaOec37lWutj7co4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <a
            href="https://drive.google.com/file/d/1p2QrpVgWB9KzuPgHOaOec37lWutj7co4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">BUY</button>
          </a>
            </Nav.Link>
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

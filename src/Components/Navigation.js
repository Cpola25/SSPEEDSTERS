import React from "react";
import "../Css/WebStyle.css";
import Logo6 from "../Web_Images/SpeedstersLogo1.png";
import { Col, Container, Row, Navbar, Image, Nav, Button} from "react-bootstrap";


export const Navigation = () => {
  return (
    <Container fluid>
        <Col>
        <Row fluid>
          <Navbar fluid expand="lg"  variant="dark" className="fixed-top navbar font-style">
           <Image className="logo" src={Logo6}/>
            <Navbar.Brand
              aria-controls="responsive-navbar-nav"
              href="/"
              src= {Logo6}
              className="font-style font-large"
            >
           Speedsters
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Container>
              <Nav fill className="m-auto">
                  <Button href="/" className="nav-button">
                    Home
                  </Button>
                  <Button href="/team" className="nav-button">
                  Team
                  </Button>
                  <Button href="/merch" className="nav-button">
                   Merch
                  </Button>
                  <Button href="/shop" className="nav-button">
                   Products
                  </Button>

                </Nav>
              </Container>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        </Col>
    </Container>
  );
};

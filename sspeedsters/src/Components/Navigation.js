import React from "react";
import "../Css/WebStyle.css";
import Logo from "../Web_Images/SpeedstersLogo6.png";
import { Col, Container, Row, Navbar, Image, Nav} from "react-bootstrap";
import { Button } from "bootstrap";

export const Navigation = () => {
  return (
    <Container fluid>
        <Col>
        <Row fluid>
          <Navbar fluid expand="lg" variant="dark" className="fixed-top navbar">
            <Image src={Logo}></Image>
            <Navbar.Brand
              aria-controls="responsive-navbar-nav"
              href="/"
              src={Logo}
              className="black"
            >
           Speedsters
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Container>
              <Nav fill className="m-auto">
                  <Button href="/" className="">
                    Home
                  </Button>

                  <Button href="/featured" className="">
                    Featured
                  </Button>
                  <Button href="/chessCom" className="">
                    Tournament
                  </Button>
                  <Button href="/play" className="">
                    Chess.com
                  </Button>

            
                  <Button href="/login" className="">
                    Login
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

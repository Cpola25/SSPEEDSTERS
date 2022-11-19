import { Button, Container, Row } from "react-bootstrap";
import React from "react";

export const Footer = () => {
  return (
    <Container className="black extra-padding">
     
      <Row fluid className="black extra-padding footer-sizing">
        
        <hr/>
        
          <a
            href="https://www.instagram.com/sspeedsters/?next=%2F"
            target="_blank"
            className=" social-icons insta"
          ></a>
          <a
          diabled
            href="https://m.facebook.com/LUChessAssoc/photos/?ref=page_internal&_se_imp=0Va664qYbN03EkU5s"
            target="_blank"
            className=" social-icons facebook"
          ></a>
           <a
            href="https://github.com/Cpola25/SSPEEDSTERS"
            target="_blank"
            className=" social-icons gitHub"
          ></a>

       
      </Row>
    </Container>
  );
};

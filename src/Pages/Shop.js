import { Button, Container, Image, Row, Tab, Tabs } from "react-bootstrap";

import React, { useState } from "react";
import Hoodie1 from "../Web_Images/Shop_Pics/Hoodies/Black_Hoodie.png";
import Hoodie2 from "../Web_Images/Shop_Pics/Hoodies/Blue_Hoodie.png";
import Hoodie3 from "../Web_Images/Shop_Pics/Hoodies/DarkGrey_Hoodie.png";
import Hoodie4 from "../Web_Images/Shop_Pics/Hoodies/LightGrey_Hoodie.png";
import Shirt1 from "../Web_Images/Shop_Pics/Shirts/Black_Shirt.png";
import Shirt2 from "../Web_Images/Shop_Pics/Shirts/Blue_Shirt.png";
import Shirt3 from "../Web_Images/Shop_Pics/Shirts/Green_Shirt.png";
import Shirt4 from "../Web_Images/Shop_Pics/Shirts/Grey_shirt.png";
import S1 from "../Web_Images/Shop_Pics/Accesories/blacl.png";
import S2 from "../Web_Images/Shop_Pics/Accesories/blue.png";
import S3 from "../Web_Images/Shop_Pics/Accesories/green.png";
import S4 from "../Web_Images/Shop_Pics/Accesories/pink.png";
import S5 from "../Web_Images/Shop_Pics/Accesories/purple.png";
import S6 from "../Web_Images/Shop_Pics/Accesories/teal.png";
import skate from "../Web_Images/SS.stl";
import { StlViewer } from "react-stl-viewer";

const style = {
  top: 0,
  left: 0,
  width: "20%",
  height: "20% !important",
};

export const Shop = () => {
  const [key, setKey] = useState("profile");
  return (
    <Container className="black font-style">
      <Row className="font-style text-center black extra-padding">
        <hr className="top-margin"></hr>
        <h1>Shop</h1>
        <p> </p>
        <p className=" font-read">Become a SSPEEDSTER!</p>
      </Row>
      <hr></hr>
      <div className="background3 shop-div">
        <Row>
          <div className="shop-div">
            {" "}
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 tab-style"
            >
              <Tab eventKey="profile" title="SSPEEDSTERS">
                <div className="top-margin">
                  <div>

                    <StlViewer
                      className="stl-div"
                      style={style}
                      orbitControls
                      shadows
                      url={skate}
                    />

                    <div className="">
                      <div className="member-shipText font-read">
                        Check out our Product here! Move it around! Don't be shy!
                      </div>
                      <div>
                        <Button className="buy-button top-margin">
                          Buy
                        </Button>
                      </div>
                    </div>


                  </div>
                </div>
              </Tab>
              <Tab eventKey="/" title="Accesories">
                <div className="top-margin membership-div">
                  <div className=""></div>

                  <Image className="merch-pic" src={S1} />
                  <Image className="merch-pic" src={S2} />
                  <Image className="merch-pic" src={S3} />
                  <Image className="merch-pic" src={S4} />
                  <Image className="merch-pic" src={S5} />
                  <Image className="merch-pic" src={S6} />
                </div>
              </Tab>
              <Tab eventKey="home" title="Shirts">
                <div></div>

                <Image className="merch-pic" src={Shirt1} />
                <Image className="merch-pic" src={Shirt2} />
                <Image className="merch-pic" src={Shirt3} />
                <Image className="merch-pic" src={Shirt4} />
              </Tab>

              <Tab eventKey="contact" title="Sweaters">
                <Image className="merch-pic" src={Hoodie1} />
                <Image className="merch-pic" src={Hoodie2} />
                <Image className="merch-pic" src={Hoodie3} />
                <Image className="merch-pic" src={Hoodie4} />
              </Tab>
            </Tabs>
          </div>
        </Row>
      </div>
    </Container>
  );
};

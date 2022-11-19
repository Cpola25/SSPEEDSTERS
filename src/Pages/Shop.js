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
import S7 from "../Web_Images/Shop_Pics/Accesories/Yellow.png";
import S8 from "../Web_Images/Shop_Pics/Accesories/Red.png";

import skate from "../Web_Images/SS.stl";
import { StlViewer } from "react-stl-viewer";

const style = {
  top: 0,
  left: 0,
  display: "block",
  width: "80%",
  height: "70% !important",
};

export const Shop = () => {
  const [key, setKey] = useState("profile");
  return (
    <Container className="black font-style">
      <Row className="font-style text-center black extra-padding top-margin">
        <hr className="top-margin"></hr>
        <h1>Shop</h1>
      </Row>
      <hr></hr>
      <div className="background3 shop-div">
        <Row className="extra-padding">
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
                      className="stl-div element.style"
                      style={style}
                      orbitControls
                      shadows
                      url={skate}
                    />

                    <div className="">
                      <div className="member-shipText font-read">
                        Check out our Product here! Move it around! Don't be
                        shy!
                      </div>
                      <div>
                        <Button className="buy-button top-margin">Buy</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="/" title="Accesories">
                <div className="top-margin membership-div">
                  <div className=""></div>

                  <div className="event-container">
                    <Image className="event-pic merch-pic" src={S1} />
                    <a className="event-button" href="">
                      <div className="event-text">Buy</div>
                    </a>
                  </div>

                  <div className="event-container">
                    <Image className="event-pic merch-pic" src={S2} />
                    <a className="event-button" href="">
                      <div className="event-text">Buy</div>
                    </a>
                  </div>

                  <div className="event-container">
                    <Image className="event-pic merch-pic" src={S3} />
                    <a className="event-button" href="">
                      <div className="event-text">Buy</div>
                    </a>
                  </div>

                  <div className="event-container">
                    <Image className="event-pic merch-pic" src={S4} />
                    <a className="event-button" href="">
                      <div className="event-text">Buy</div>
                    </a>
                  </div>

                  <div className="event-container">
                    <Image className="event-pic merch-pic" src={S5} />
                    <a className="event-button" href="">
                      <div className="event-text">Buy</div>
                    </a>
                  </div>

                  <div className="event-container">
                    <Image className="event-pic merch-pic" src={S6} />
                    <a className="event-button" href="">
                      <div className="event-text">Buy</div>
                    </a>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="home" title="Shirts">
                <div></div>

                <div className="event-container">
                  <Image className="event-pic merch-pic" src={Shirt1} />
                  <a
                    className="event-button"
                    href="https://www.amazon.com/dp/B0BMJGCJDH?ref=ppx_yo2ov_dt_b_product_details&customId=B0752XJX9Q&th=1"
                  >
                    <div className="event-text">Buy</div>
                  </a>
                </div>

                <div className="event-container">
                  <Image className="event-pic merch-pic" src={Shirt2} />
                  <a
                    className="event-button"
                    href="https://www.amazon.com/dp/B0BMJGCJDH?ref=ppx_yo2ov_dt_b_product_details&customId=B07535YCL2&th=1"
                  >
                    <div className="event-text">Buy</div>
                  </a>
                </div>

                <div className="event-container">
                  <Image className="event-pic merch-pic" src={Shirt3} />
                  <a
                    className="event-button"
                    href="https://www.amazon.com/dp/B0BMJGCJDH?ref=ppx_yo2ov_dt_b_product_details&customId=B07537HQXD&th=1"
                  >
                    <div className="event-text">Buy</div>
                  </a>
                </div>

                <div className="event-container">
                  <Image className="event-pic merch-pic" src={Shirt4} />
                  <a
                    className="event-button"
                    href="https://www.amazon.com/dp/B0BMJGCJDH?ref=ppx_yo2ov_dt_b_product_details&customId=B0752XJYNL&th=1"
                  >
                    <div className="event-text">Buy</div>
                  </a>
                </div>
              </Tab>

              <Tab eventKey="contact" title="Sweaters">
                <div className="event-container">
                  <Image className="event-pic merch-pic" src={Hoodie1} />
                  <a
                    className="event-button"
                    href="https://www.amazon.com/gp/product/B0BMK6M4WD/ref=ox_sc_act_title_1?smid=ATVPDKIKX0DER&customizationToken=MC_Assembly_1%23B078RXQC7K&customId=B078RWY6LM&th=1&psc=1"
                  >
                    <div className="event-text">Buy</div>
                  </a>
                </div>

                <div className="event-container">
                  <Image className="event-pic merch-pic" src={Hoodie2} />
                  <a
                    className="event-button"
                    href="https://www.amazon.com/gp/product/B0BMK6M4WD/ref=ox_sc_act_title_1?smid=ATVPDKIKX0DER&customizationToken=MC_Assembly_1%23B078RXQC7K&customId=B078RYKX77&th=1&psc=1"
                  >
                    <div className="event-text">Buy</div>
                  </a>
                </div>

                <div className="event-container">
                  <Image className="event-pic merch-pic" src={Hoodie3} />
                  <a
                    className="event-button"
                    href="https://www.amazon.com/gp/product/B0BMK6M4WD/ref=ox_sc_act_title_1?smid=ATVPDKIKX0DER&customizationToken=MC_Assembly_1%23B078RXQC7K&customId=B078RWX7VM&th=1&psc=1"
                  >
                    <div className="event-text">Buy</div>
                  </a>
                </div>

                <div className="event-container">
                  <Image className="event-pic merch-pic" src={Hoodie4} />
                  <a
                    className="event-button"
                    href="https://www.amazon.com/gp/product/B0BMK6M4WD/ref=ox_sc_act_title_1?smid=ATVPDKIKX0DER&customizationToken=MC_Assembly_1%23B078RXQC7K&customId=B078RXQC7K&th=1&psc=1"
                  >
                    <div className="event-text">Buy</div>
                  </a>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Row>
      </div>
    </Container>
  );
};

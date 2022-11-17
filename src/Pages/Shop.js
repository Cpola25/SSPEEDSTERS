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
import skate from "../Web_Images/SS.stl"; 
import { StlViewer } from 'react-stl-viewer';

const style = {
    top: 0,
    left: 0,
    width: '70%',
    height: '40% !important',
  }

export const Shop = () => {
    const [key, setKey] = useState("profile");
    return (
<Container>
    <Row>
        <h1>
            Shop
        </h1>
    </Row>
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
            <div className="top-margin membership-div">
              <div className="">
              <StlViewer
className='stl-div'
            style={style}
            orbitControls
            shadows
            url={skate}
        />
              </div>

              <div className="member-shipText">
                <li>Quick, Efficient, and Affordable!</li>
                <br/>
                <li>Just strap them on and go!</li>
                <br/>
                <li> Comes in a Variety of Colors!</li>
                <br/>
                <li>Check it out! Move the model around!</li>
                <Button disabled className="buy-button top-margin">
                  COMING SOON
                </Button>
              </div>
              
            </div>
          </Tab>
          <Tab eventKey="/"  title="Accesories">
            <div className="top-margin membership-div">
              <div className="">
              </div>

      
                <Button disabled className="buy-button top-margin">
                  COMING SOON
                </Button>
              </div>
              
            
          </Tab>
          <Tab eventKey="home" title="Shirts">
            <div>

            </div>

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
</Container>
    ); 
}; 
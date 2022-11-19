

import { Button, Carousel, Image } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import "../Css/WebStyle.css";
import pic from "../Web_Images/Banner/Product.png"; 
import nicole from"../Web_Images/Nicole.jpg";
import me from "../Web_Images/Me.png"; 
import skate from "../Web_Images/SS.stl"; 
import { StlViewer } from 'react-stl-viewer';
import headerVid from '../Web_Videos/turnspeed.mp4'; 
import { ContactUs } from '../Components/Contact';
const style = {
  top: 0,
  left: 0,
  width: '70%',
  height: '50vh',
}


export const HomeScreen = () => {
    return (
<Container> 
  <Row>
  <div className='black background2 text-center'>
  <h1 className='font-style ban-text'> CREATIVE...INNOVATIVE...FAST</h1>
  </div>
  </Row>
  <Row className='spacer black extra-padding'></Row>

  <Row className='white extra-padding'>
        <hr></hr>
        <div className="App">
          <header className="App-header">
            <img src={pic} className="App-logo" alt="logo" />
           
          </header>
          <div className='text-center we-be'>
        <h1 className='font-style'>Who are we?</h1>
      <p className='font-read font-medium'>
      Speedsters is a start-up company dedicated to bringing about a new-contemporary reimaginig of the classic rollerblade, to universities across the U.S.. 
      After speaking with various college students at our local university, we discoverd that there is a lack of variety in accesible transportation methods 
      avaliable for critical everday activites such as getting to class. With our vision, students will have the ability to purchase an affordable, effective, and fun way 
      to optimize thier moblity to combat the daily struggles of moving across somtimes enormous campuses. Currently the major forms of transportation adopted by
      students include electric scooters, skateboards, and bicycles. What our team realized is that these other products are incredibly expensive and therefore largely 
      inaccesible to a considerable percentage of this demographic. With our product, we aim to tap into the full potential of this market by providing a more affordable alternative.
      As first generation Hispanic students, we understand that products like Sspeedsters can be conducive to the long term success of our peers.  </p>    
        </div>

   

        </div>

        <hr className='top-margin'></hr>
    </Row>
    <Row className="background1 grey">
            <div className="team-div font-style ">
              <h3 className="bottom-margin team-title">Meet our Team</h3>
              <hr></hr>
              <div className=" zoom team-div1 to-left ">
                <Image className="team-person" src={nicole} />
             
                <h2 className=" team-name">Nicole Herrera</h2>
                <p className="team-description font-read">
                  Sspeedsters Co-Founder <br/> Buisness Administrator{" "}
                </p>
              </div>
              <div className="team-div1 to-left zoom">
                <Image className="team-person" src={me} />
                <h2 className=" team-name">Lizbeth Trujillo</h2>
                <p className="team-description font-read">Sspeedsters Co-Founder <br/> Software Developer</p>
              </div>           
            </div>
      </Row>
      <Row>
        <ContactUs></ContactUs>
      </Row>
</Container>
    ); 
}; 

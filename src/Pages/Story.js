import { Container, Image, Row } from "react-bootstrap";
import trujillo from "../Web_Images/StoryPics/T.png";
import herrera from "../Web_Images/StoryPics/H.png";

export const Story = () => {
  return (
    <Container className="grey">

      <Row className="text-center background4">
        <div className="font-read story-text extra-padding">
        <h1 className="font-style black">Our Story</h1>
        <hr></hr>
          As first-generation Latina students, we understand the values and core
          principles shared by members of the Hispanic community. Dedication,
          Hard-Work, and Perseverance are amoung the values that were ingrained
          in us by our families. Becuase of our background, we are able to
          understand the hardships faced by immigrant households and the emmense
          impact these hardships can have on thier family. With Sspeedsters, we
          created something not only with the Hispanic Community in mind, but
          for all college students who struggle to afford expensive On-campus
          transportation. We believe that products which can greatly improve
          quality of life, should be available to everyone. Sspeedsters comes
          from the students who understand, and we hope to have the same loyalty
          between Latino families with our customers.
          <div className="top-margin">
          <Image className="story-pic" src={trujillo}></Image>
          <Image className="story-pic" src={herrera}></Image>
          </div>
        </div>
    
      </Row>
    </Container>
  );
};

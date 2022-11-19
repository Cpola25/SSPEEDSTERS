import logo from "./logo.svg";
import "./App.css";
import pic from "./Web_Images/SpeedstersLogo6.png";
import { ContactUs } from "./Components/Contact";
import { Container, Row } from "react-bootstrap";
import {HomeScreen} from "../src/Pages/HomeScreen.js"
import { Navigation } from "./Components/Navigation";
import { Shop } from "./Pages/Shop";
import { Footer } from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'; 
import React from "react";


function App() {
  return (
    <Container fluid>
      <Row>  
      <Navigation />
         <Router>
          <Routes>
       <Route path="/" element={<HomeScreen/>} />
       <Route path="/team" element={<HomeScreen/>} />
       <Route path="/story" element={<HomeScreen/>} />
       <Route path="/shop" element={<Shop/>} />

          </Routes>
         </Router>
         <Footer></Footer>
      </Row>
    </Container>

  );
}

export default App;

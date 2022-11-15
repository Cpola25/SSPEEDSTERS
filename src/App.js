import logo from "./logo.svg";
import "./App.css";
import pic from "./Web_Images/SpeedstersLogo6.png";
import { Container, Row } from "react-bootstrap";
import {HomeScreen} from "../src/Pages/HomeScreen.js"
import { Navigation } from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'; 
import React from "react";


function App() {
  return (
    <Container fluid>

      <Row>
        <Navigation />
      </Row>
      <Row>
  <HomeScreen></HomeScreen>
      </Row>
    </Container>
  );
}

export default App;

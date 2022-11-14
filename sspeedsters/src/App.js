import logo from "./logo.svg";
import "./App.css";
import pic from "./Web_Images/SpeedstersLogo6.png";
import { Container, Row } from "react-bootstrap";
import { HomeScreen } from "./Pages/HomeScreen";
import { Navigation } from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Container>
      <Row>
  
      </Row>
  
      <Row>
        <div className="App">
          <header className="App-header">
            <img src={pic} className="App-logo" alt="logo" />
            <p>Speedsters</p>
          </header>
        </div>
      </Row>
    </Container>
  );
}

export default App;

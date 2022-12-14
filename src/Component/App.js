import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Interval from "./Component/int";

const styleImg = { width: 300 };

class App extends React.Component {
  state = {
    shows: false,
    fullName: "ADELE",
    profession: "Artiste",
    bio:
      "Adele Laurie Blue Adkins,dite Adele, née le 5 mai 1988 dans le quartier londonien de Tottenham, est une auteure-compositrice-interprète britannique.",
    imgSrc: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Adele_for_Vogue_in_2021.png/330px-Adele_for_Vogue_in_2021.png" alt="Profile_Photo" style={styleImg} />
    ),
  };
  render() {
    const buttonMsg = this.state.shows ? "Hide Profile" : "Show Profile";
    return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Checkpoint //React State</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <NavDropdown title="help" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://www.youtube.com/watch?v=3wvdq_j5S1c">
                  How to Conditionally Render Components in React.js - Part 7
                </NavDropdown.Item>
                <NavDropdown.Item href="https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks">
                  setInterval in React Components Using Hooks
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="title">
          <h1>Profile:</h1>
        </div>
        {this.state.shows ? (
          <div className="profileElements">
            <h1>{this.state.fullName}</h1>
            <h3>{this.state.profession}</h3>
            <div>{this.state.imgSrc}</div>
            <p>
              <b>Bio:</b>
              <br />
              {this.state.bio}
            </p>
          </div>
        ) : null}
        <button onClick={() => this.setState({ shows: !this.state.shows })}>
          {buttonMsg}
        </button>
        <Interval />
      </div>
    );
  }
}
export default App;
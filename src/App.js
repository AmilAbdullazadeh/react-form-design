import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Info from "./components/Info";
import CenterForm from "./components/CenterForm";
import Photo from "./components/Photo";

import "./style/app.scss"

class App extends Component {
  state = {
    title: "get in touch with us",
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="6" md="3">
              <Info title={this.state.title} />
            </Col>
            <Col xs="6" md="4">
              <CenterForm />
            </Col>
            <Col xs="12" md="5">
              <Photo />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

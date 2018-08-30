import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import ConnectedTeamScore from "./teamscore/teamscore.js";
import ConnectedScoreSelectorGrid from "./scoreSelectorGrid/RunSelector";
import ExtranSelectorGrid from "./scoreSelectorGrid/ExtrasSelector";
import { ConnectedPlayerSelector } from "./playerSelectorGrid/playerSelector";
import { ConnectedCurrentOverDisplay } from "./store/viewController.js";
import Next from "./next/next";
import { Container, Row, Col } from "reactstrap";

const store = configureStore();
const divStyle = {
  margin: "auto",
  border: "5px solid black",
  "background-color": "lightyellow",
  width: "500px"
};
const App = () => (
  <Provider store={store}>
    <Container style={divStyle}>
      <Row>
        <Col xs="3">
          <ConnectedTeamScore />
        </Col>
      </Row>
      <Row>
        <Col>
          <ConnectedCurrentOverDisplay />
        </Col>
      </Row>
      <Row>
        <Col>
          <ConnectedPlayerSelector />
        </Col>
      </Row>
      <Row>
        <Col>
          <ConnectedScoreSelectorGrid />
        </Col>
      </Row>
      <Row>
        <Col>
          <ExtranSelectorGrid />
        </Col>
      </Row>
      <Row>
        <Col>
          <Next />
        </Col>
      </Row>
    </Container>
  </Provider>
);

//TODO - do we need so many div containers

export default App;

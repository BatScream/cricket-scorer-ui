import React from "react";
import ConnectedTeamScore from "../teamscore/teamscore.js";
import ExtranSelectorGrid from "../scoreSelectorGrid/ExtrasSelector";
import ConnectedScoreSelectorGrid from "../scoreSelectorGrid/RunSelector";
import { ConnectedPlayerSelector } from "../playerSelectorGrid/playerSelector";
import { ConnectedCurrentOverDisplay } from "../store/viewController.js";
import Next from "../next/next";
import { Container, Row, Col } from "reactstrap";
import Out from "../out/out";

class LiveScore extends React.Component {
  render() {
    const divStyle = {
      margin: "auto",
      border: "5px solid black",
      backgroundColor: "lightyellow",
      width: "500px"
    };

    return (
      <Container style={divStyle}>
        <Row>
          <Col>
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
            <Out />
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 12, offset: 4 }}>
            <Next />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LiveScore;

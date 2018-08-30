import React from "react";
import ConnectedTeamScore from "../teamscore/teamscore.js";
import ConnectedBattingTableDisplay from "../BattingTable/battingTable";
import { Container, Row, Col } from "reactstrap";

class ScoreBoard extends React.Component {
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
          <Col xs="3">
            <ConnectedTeamScore />
          </Col>
        </Row>
        <Row>
          <Col>
            <ConnectedBattingTableDisplay />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ScoreBoard;

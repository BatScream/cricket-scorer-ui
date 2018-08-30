import React from "react";
import "./home.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LiveScore from "./liveScore";
import ScoreBoard from "./scoreBoard";
import { Container, Row, Col } from "reactstrap";

class Home extends React.Component {
  render() {

    const divStyle = {
      margin: "auto",
      border: "5px solid black",
      backgroundColor: "lightyellow",
      width: "500px",
      "text-align":"center"
    };

    return (
      <HashRouter>
        <div>
        <Container style={divStyle}>
        <Row>
          <Col>
          <NavLink to="/"><button class="button">Live Score</button></NavLink>
          </Col>
          <Col>
          <NavLink to="/scoreboard"><button class="button">Score Board</button></NavLink>
          </Col>
        </Row>
          </Container>
          <div className="content">
            <Route exact path="/" component={LiveScore} />
            <Route path="/scoreboard" component={ScoreBoard} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Home;

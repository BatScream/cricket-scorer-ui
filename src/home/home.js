import React from "react";
import "./home.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import LiveScore from "./liveScore";
import ScoreBoard from "./scoreBoard";

class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="segmented">
            <NavLink to="/">Live Score</NavLink>
            <NavLink to="/scoreboard">Score Board</NavLink>
          </div>
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

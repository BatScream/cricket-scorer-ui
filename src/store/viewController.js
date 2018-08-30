import React from "react";
import { connect } from "react-redux";
import "./viewController.css";

const Overs = props => {
  console.log(props.game);

  return (
    <div className="overDetails">
      <label>This Over :</label>{" "}
      <span className="bowlingDetails">{printCurrentOvers(props)}</span>
      <div className="BowlerDetails">
        <span className="bowler">Bowler :</span>
        <span className="bowlerName"> {printPlayerName(props)}</span>
      </div>
    </div>
  );
};

const printCurrentOvers = props => {
  return (
    <label>
      {props.game.currentOver
        .map(ball => {
          if (ball.wicket) {
            return "Out";
          }
          return (ball.runs || "") + (ball.extras || "");
        })
        .join(" ")}
    </label>
  );
};

const ConnectedCurrentOverDisplay = connect(state => state)(Overs);

//============================================BOWLERSVIEW

const printPlayerName = props => {
  let playerteam = props.game.currentBowler.team;
  let playerID = props.game.currentBowler.player;
  let playerName = props.game.teams[playerteam].players[playerID].name;
  return playerName;
};

export { ConnectedCurrentOverDisplay };

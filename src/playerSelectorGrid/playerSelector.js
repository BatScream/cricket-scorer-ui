import React from "react";
import { connect } from "react-redux";
import "./playerSelector.css";

const PlayerSelector = props => {
  const playerIds = props.currentBatsmen.players;
  const teamId = props.currentBatsmen.team;
  const team = props.teams[teamId];
  const idOnStrike = props.currentBatsmen.onStrike;

  return (
    <div className="container">
      <div className="segmented">
        {playerIds.map((id, index) => {
          return (
            <label
              key={index}
              className={idOnStrike === index ? "checked" : ""}
            >
              <input type="radio" name="segmented" />
              {team.players[id].name}
            </label>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToPlayerSelectorProps = state => {
  return {
    currentBatsmen: state.game.currentBatsmen,
    teams: state.game.teams
  };
};

export const ConnectedPlayerSelector = connect(mapStateToPlayerSelectorProps)(
  PlayerSelector
);

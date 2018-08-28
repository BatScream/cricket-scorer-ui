import React from "react";
import { connect } from "react-redux";
import { updateOverWithBall } from "../game/actions";
import "./viewController.css";

const Overs = props => {
  console.log(props);
  return (
    <div className="overDetails">
      <label>This Over :</label>{" "}
      <span className="bowlingDetails">{printCurrentOvers(props)}</span>
      <div>
        update over details
        <input
          type="button"
          value="Next Ball"
          onClick={event =>
            props.updateOver({ runs: 6, extras: "W", wicket: "NWK" })
          }
        />
      </div>
    </div>
  );
};

const printCurrentOvers = props => {
  console.log(props);

  let stringToDisplay = "";
  props.game.currentOver.map(ball => {
    stringToDisplay += ball.runs + "_";
    stringToDisplay += ball.extras;
    assignWicketDetails(ball.wicket);
    console.log("test");
    return <label>{stringToDisplay}</label>;
  });

  const mapStateCurrentOverDisplay = state => {
    console.log(state);
    return state;
  };
  function assignWicketDetails(wicket) {
    console.log("inside codition" + wicket);

    if (wicket === "NWK") {
      stringToDisplay += " ";
    } else {
      stringToDisplay += "_" + wicket + " ";
    }
  }
  console.log(stringToDisplay);
  return <label>{stringToDisplay}</label>;
};

const mapStateCurrentOverDisplay = state => {
  console.log(state);
  return state;
};

const MapDispatchForOverUpdate = dispatch => ({
  updateOver: text => dispatch(updateOverWithBall(text))
});
const ConnectedCurrentOverDisplay = connect(
  mapStateCurrentOverDisplay,
  MapDispatchForOverUpdate
)(Overs);
export default ConnectedCurrentOverDisplay;

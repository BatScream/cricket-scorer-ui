import React from "react";
import { connect } from "react-redux";
import { NEXT_BALL } from "../game/actions";

class Next extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.nextBall();
          }}
        >
          Next Ball
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => {
    return {
      nextBall: () => {
        dispatch({
          type: NEXT_BALL
        });
      }
    };
  }
)(Next);

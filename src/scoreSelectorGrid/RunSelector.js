import React from "react";
import ButtonGroup from "../common/ButtonGroup";
import { connect } from "react-redux";
import { SET_CURRENT_SCORE } from "../game/actions";

class ScoreSelectorGrid extends React.Component {
  render() {
    const input = [0, 1, 2, 3, 4, 5, 6];
    return <ButtonGroup input={input} handleClick={this.props.handleClick} />;
  }
}

export default connect(
  null,
  dispatch => ({
    handleClick: text => {
      dispatch({
        type: SET_CURRENT_SCORE,
        value: text
      });
    }
  })
)(ScoreSelectorGrid);

import React from "react";
import ButtonGroup from "../common/ButtonGroup";
import { connect } from "react-redux";
import { SET_CURRENT_SCORE } from "../game/actions";

class ScoreSelectorGrid extends React.Component {
  render() {
    const input = [
      { value: 0, label: 0 },
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
      { value: 6, label: 6 }
    ];

    return <ButtonGroup input={input} handleClick={this.props.handleClick} />;
  }
}

export default connect(
  null,
  dispatch => ({
    handleClick: data => {
      dispatch({
        type: SET_CURRENT_SCORE,
        value: data
      });
    }
  })
)(ScoreSelectorGrid);

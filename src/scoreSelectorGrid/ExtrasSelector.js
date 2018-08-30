import React from "react";
import ButtonGroup from "../common/ButtonGroup";
import { connect } from "react-redux";
import { SET_EXTRAS } from "../game/actions";

class ExtranSelectorGrid extends React.Component {
  render() {
    const input = [
      { value: 1, label: 'W'},
      { value: 1, label: 'N' },
      { value: 0, label: 'B' },
      { value: 0, label: 'Lb' }
    ];
    return (
      <div>
        Extras{" "}
        <ButtonGroup input={input} handleClick={this.props.handleClick} />
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    handleClick: text => {
      dispatch({
        type: SET_EXTRAS,
        value: text
      });
    }
  })
)(ExtranSelectorGrid);

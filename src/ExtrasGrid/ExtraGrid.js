import React from "react";
import ButtonGroup from "../common/ButtonGroup";
import { connect } from "react-redux";
import { SET_CURRENT_SCORE, SET_EXTRAS } from "../game/actions";



class ExtranSelectorGrid extends React.Component {
  render() {
    const input = ['W','N','B','Lb'];
  return (<span>Extras <ButtonGroup input={input} handleClick={this.props.handleClick} /></span>);
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
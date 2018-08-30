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
        <ButtonGroup input={input} selectedValue={this.props.selectedScore} handleClick={this.props.handleClick} />
      </div>
    );
  }

 
}

const mapCurrentSelectedExtra = (state) => {
  function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }
  if(isEmpty(state.currentSelectedScore)){
    return {selectedScore: -1}
  }else{
    return {selectedScore: state.mapCurrentSelectedExtra.value}
  }
};

export default connect(
  mapCurrentSelectedExtra,
  dispatch => ({
    handleClick: text => {
      dispatch({
        type: SET_EXTRAS,
        value: text
      });
    }
  })
)(ExtranSelectorGrid);

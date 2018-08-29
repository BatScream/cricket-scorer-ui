import React from "react";
import Button from "./Button";

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: -1
    };
    this.onSelection = this.onSelection.bind(this);
  }

  onSelection(selectedvalue) {
    this.setState((state, props) => {
      return {
        selectedValue: selectedvalue
      };
    });
  }
  render() {
    var selectedValue = this.state.selectedValue;
    return this.props.input.map((element, index) => {
      var isSelected = selectedValue === element.label;
      return (
        <Button
          key={index}
          element={element}
          isSelected={isSelected}
          onSelection={this.onSelection}
          handleClick={this.props.handleClick}
        />
      );
    });
  }
}

export default ButtonGroup;

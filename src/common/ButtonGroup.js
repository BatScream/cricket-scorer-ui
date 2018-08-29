import React from "react";
import Button from "./Button";

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.selectedValue
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
    var selectedValue = this.props.selectedValue;
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

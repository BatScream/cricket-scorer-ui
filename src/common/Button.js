import React from "react";
import "./Button.css";
import { Button } from "reactstrap";

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      onSelection: props.onSelection
    };
    this.getClassForButtonState = this.getClassForButtonState.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  getClassForButtonState(selected) {
    if (selected) {
      return "selectedButtonClass";
    } else {
      return "buttonClass";
    }
  }

  buttonClick() {
    this.props.onSelection(this.props.element.label);
    this.props.handleClick({
      label: this.props.element.label,
      value: this.props.element.value
    });
    console.log(this.props.element.value);
  }
  render() {
    return (
      <Button
        className={this.getClassForButtonState(this.props.isSelected)}
        id={this.props.element.label}
        onClick={() => {
          this.buttonClick();
        }}
      >
        {this.props.element.label}
      </Button>
    );
  }
}

export default CustomButton;

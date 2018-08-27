import React from "react";
import Button from "./Button";

class ButtonGroup extends React.Component {
  render() {
    return this.props.input.map((element, index) => (
      <Button
        key={index}
        element={element}
        handleClick={this.props.handleClick}
      />
    ));
  }
}

export default ButtonGroup;

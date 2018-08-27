import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className="buttonClass"
        id={this.props.element.label}
        onClick={() => {
          this.props.handleClick(this.props.element.value);
        }}
      >
        {this.props.element.label}
      </button>
    );
  }
}

export default Button;

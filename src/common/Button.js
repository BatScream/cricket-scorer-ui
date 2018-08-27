import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        id="1"
        onClick={() => {
          this.props.handleClick(this.props.value);
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;

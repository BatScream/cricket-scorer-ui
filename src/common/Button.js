import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <button className='buttonClass'
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

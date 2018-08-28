import React from "react";
import "./Button.css";

class Button extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isSelected:false
    }
    this.getClassForButtonState = this.getClassForButtonState.bind(this)
  }

  getClassForButtonState(selected){
    if(selected){
     return 'selectedButtonClass' 
    }else{
     return 'buttonClass'

    }
  }
  render() {
    return (
      <button
        className={this.getClassForButtonState(this.state.isSelected)}
        id={this.props.element.label}
        onClick={() => {
          this.setState(function (state, props) {
            return {
              isSelected: !state.isSelected
            }
           })
          this.props.handleClick(this.props.element.value);
        }}
      >
        {this.props.element.label}
      </button>
    );
  }
}

export default Button;

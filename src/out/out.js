import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

class Out extends React.Component {
  render() {
    return (
      <div>
        <Button
          color="danger"
          onClick={() => {
            this.props.wicketDown();
          }}
        >
          Out
        </Button>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => {
    return {
      wicketDown: () => {
        dispatch({
          type: "FALL_OF_WICKET"
        });
      }
    };
  }
)(Out);

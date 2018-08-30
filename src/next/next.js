import React from "react";
import { connect } from "react-redux";
import { NEXT_BALL } from "../game/actions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Next extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("received", event.target.value);
    this.setState({ newBatsmanId: event.target.value });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleFallOfWicketAndProceed() {
    this.props.game.isOut ? this.toggle() : this.props.nextBall();
  }

  getFirstEligiblePlayer() {
    return this.getEligiblePlayers()[0];
  }

  getEligiblePlayers() {
    const teamPlayerDetails = this.props.game.teams[
      this.props.game.currentBattingTeam
    ].players;
    const playersAvailable = Object.keys(teamPlayerDetails);
    const ineligibleBatsmen = this.props.game.currentBatsmen.players.concat(
      this.props.game.playersOut
    );

    const result = playersAvailable
      .filter(
        p =>
          !ineligibleBatsmen.includes(Number(p)) &&
          !ineligibleBatsmen.includes(p)
      )
      .map(player => ({ name: teamPlayerDetails[player].name, id: player }));

    console.log("Players Available: ", playersAvailable);
    console.log("Players Ineligible: ", ineligibleBatsmen);
    console.log("Players eligible  ", result);
    return result;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Button
          color="success"
          onClick={() => {
            this.handleFallOfWicketAndProceed();
          }}
        >
          Next Ball
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Select Next Batsman</ModalHeader>
          <ModalBody>
            {this.getEligiblePlayers().map((player, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="batsmen"
                  value={player.id}
                  defaultChecked={index == 0}
                  onClick={event => {
                    this.handleChange(event);
                  }}
                />
                {player.name}
              </label>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              disabled={!this.getFirstEligiblePlayer()}
              onClick={() => {
                this.toggle();
                this.props.nextBall({
                  nextBatsman:
                    this.state.newBatsmanId || this.getFirstEligiblePlayer().id
                });
              }}
            >
              Select
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => {
    return {
      nextBall: payload => {
        console.log("pay", payload);
        dispatch({
          type: NEXT_BALL,
          payload
        });
      }
    };
  }
)(Next);

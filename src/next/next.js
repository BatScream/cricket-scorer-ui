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
    debugger;
    this.setState({ newBatsmanId: parseInt(event.target.value) });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleFallOfWicketAndProceed() {
    // this.props.game.isOut
    this.props.isOut ? this.toggle() : this.props.nextBall();
  }

  getFirstEligiblePlayer() {
    return this.getEligiblePlayers()[0];
  }

  getEligiblePlayers() {
    const teamPlayerDetails = this.props.players;
    // this.props.game.teams[
    //   this.props.game.currentBattingTeam
    // ].players;

    const playersAvailableIds = Object.keys(teamPlayerDetails).map(k =>
      Number(k)
    );

    const ineligibleBatsmenIds = this.props.currentBatsmen.players.concat(
      this.props.playersOut
    );

    const eligiblePlayerList = playersAvailableIds
      .filter(playerId => !ineligibleBatsmenIds.includes(playerId))
      .map(eligiblePlayerId => ({
        name: teamPlayerDetails[eligiblePlayerId].name,
        id: eligiblePlayerId
      }));

    console.log("Players Available: ", playersAvailableIds);
    console.log("Players Ineligible: ", ineligibleBatsmenIds);
    console.log("Players eligible  ", eligiblePlayerList);
    return eligiblePlayerList;
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
          onClosed={() => {
            this.setState({ newBatsmanId: undefined });
          }}
        >
          <ModalHeader toggle={this.toggle}>
            Select Next Batsman, Please close if non available.
          </ModalHeader>
          <ModalBody>
            {this.getEligiblePlayers().map((player, index) => (
              <div>
                <label key={index}>
                  <input
                    type="radio"
                    name="batsmen"
                    value={player.id}
                    onClick={event => {
                      this.handleChange(event);
                    }}
                  />
                  {player.name}
                </label>
              </div>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.toggle();
                this.props.nextBall();
              }}
            >
              Finish innings
            </Button>{" "}
            <Button
              color="primary"
              disabled={!this.state.newBatsmanId}
              onClick={() => {
                this.toggle();
                this.props.nextBall({
                  nextBatsman: this.state.newBatsmanId
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

const mappingFunctionForNExt = state => {
  const currentState = Object.assign({}, state.game);
  const players = currentState.teams[currentState.currentBattingTeam].players;
  // this.props.game.currentBatsmen.players.concat(
  //   this.props.game.playersOut
  // );
  const currentBatsmen = currentState.currentBatsmen;
  const playersOut = currentState.playersOut;
  debugger;
  return {
    isOut: currentState.isOut,
    players: players,
    currentBatsmen: currentBatsmen,
    playersOut: playersOut
  };
};

export default connect(
  mappingFunctionForNExt,
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

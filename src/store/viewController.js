
import React from 'react'
import { connect } from 'react-redux'
import { relative } from 'upath';
import { updateOverWithBall, updateExtrasForBowler } from '../game/actions'
import './viewController.css'



const Overs = (props) => {
  console.log(props.game)

  return (
    <div className="overDetails">
      <label>This Over :</label> <span className="bowlingDetails">{printCurrentOvers(props)}</span>

      <div className="BowlerDetails">
        <span className='bowler'>Bowler :</span>
        <span className="bowlerName"> {printPlayerName(props)}</span>
      </div>


      <div>
        update over details
            <input type="button" value="Next Ball" onClick={(event) => handleNextBallButtonClick(props)} />
      </div>

    </div>
  )
}

const handleNextBallButtonClick = (props) => {
 // props.updateOver({ "runs": 6, "extras": 'W', "wicket": 'OUT' });
  props.updateOver({ "runs":  props.game.currentSelectedScore.value, "extras":  props.game.currentSelectedExtra.label, "wicket": 'NWK' })
  props.updateExtras()
};

const printCurrentOvers = (props) => {
  let stringToDisplay = "";
  props.game.currentOver.map(ball => {
    if(ball.runs !== 0){
      stringToDisplay += ball.runs;
    }
    if(ball.extras !== null){
      stringToDisplay += ball.extras;
    }
    assignWicketDetails(ball.wicket);
    console.log("test");
    return <label>{stringToDisplay}</label>;
  });

  const mapStateCurrentOverDisplay = state => {
    console.log(state);
    return state;
  };
  function assignWicketDetails(wicket) {
    console.log("inside codition" + wicket);

    if (wicket === "NWK") {
      stringToDisplay += " ";
    } else {
      stringToDisplay += "_" + wicket + " ";
    }
  }
  console.log(stringToDisplay);
  return <label>{stringToDisplay}</label>;
};

const mapStateCurrentOverDisplay = state => {
  console.log(state);
  return state;
};

const MapDispatchForOverUpdate = dispatch => ({
  updateOver: text => dispatch(updateOverWithBall(text)),
  updateExtras: () => dispatch(updateExtrasForBowler())

});

const ConnectedCurrentOverDisplay = connect(
  mapStateCurrentOverDisplay,
  MapDispatchForOverUpdate
)(Overs);


//============================================BOWLERSVIEW

const printPlayerName = (props) => {
  let playerteam = props.game.currentBowler.team;
  let playerID = props.game.currentBowler.player;
  let playerName = props.game.teams[playerteam].players[playerID].name;
  return playerName;
};


const mapStateCurrentBowlerDisplay = state => {
  return state;
};

const mapDispatchToUpdateBowlersExtras = dispatch => ({
});

const ConnectedCurrentBowlerDisplay = connect(mapStateCurrentOverDisplay, MapDispatchForOverUpdate)(Overs);


export {
  ConnectedCurrentBowlerDisplay,
  ConnectedCurrentOverDisplay
}

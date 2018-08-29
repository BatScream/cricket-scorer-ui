import React from 'react'
import { connect } from 'react-redux'
import './bowlersView.css'
import { updateExtrasForBowler } from '../game/actions';


const BowlerDetails = (props) => {
    console.log(props)
    console.log(props.game.currentBowler.team)
    return (
        <div className="BowlerDetails">
            <span className='bowler'>Bowler :</span>
            <span className="bowlerName"> {printPlayerName(props)}</span>


            <div>
                update Extras
            <input type="button" value="update Extras" onClick={(event) => props.updateExtras()} />
            </div>




        </div>
    )

}

const printPlayerName = (props) => {
    console.log(props);
    let playerteam = props.game.currentBowler.team;
    let playerID = props.game.currentBowler.player;
    let playerName = props.game.teams[playerteam].players[playerID].name;
    return playerName;
};


const mapStateCurrentBowlerDisplay = state => {
    console.log(state);
    return state;
};

const mapDispatchToUpdateBowlersExtras = dispatch => ({
    updateExtras: () => dispatch(updateExtrasForBowler())
});

const ConnectedCurrentBowlerDisplay = connect(mapStateCurrentBowlerDisplay, mapDispatchToUpdateBowlersExtras)(BowlerDetails);

export default ConnectedCurrentBowlerDisplay;

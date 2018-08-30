import React from 'react';
import ConnectedTeamScore from "../teamscore/teamscore.js";
import ConnectedBattingTableDisplay from "../BattingTable/battingTable"

class ScoreBoard extends React.Component {
    render() {
        return (
            <div>
                <ConnectedTeamScore />
                <ConnectedBattingTableDisplay />
            </div>
        )
    }
}

export default ScoreBoard;
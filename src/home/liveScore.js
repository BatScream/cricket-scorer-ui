import React from 'react';
import ConnectedTeamScore from "../teamscore/teamscore.js";
import ExtranSelectorGrid from "../scoreSelectorGrid/ExtrasSelector";
import ConnectedScoreSelectorGrid from "../scoreSelectorGrid/RunSelector";
import { ConnectedPlayerSelector } from "../playerSelectorGrid/playerSelector";
import { ConnectedCurrentOverDisplay } from "../store/viewController.js";
import Next from "../next/next";

class LiveScore extends React.Component {

    render() {
        return (
            <div>
                <ConnectedTeamScore />
                <ConnectedCurrentOverDisplay />
                <ConnectedPlayerSelector />
                <ConnectedScoreSelectorGrid />
                <div>
                    <ExtranSelectorGrid />
                </div>
                <Next />
            </div>

        )
    }
}

export default LiveScore;


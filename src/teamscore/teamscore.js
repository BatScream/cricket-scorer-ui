import React from 'react'
import { connect } from 'react-redux'

const TeamScore = (props) => {

    const game = props.game
    const teams = game.teams

    const dom = []

    Object.keys(teams)
        .map(teamName => dom.push(getTeamScoreDisplayElement(teamName, teams[teamName], game.maxOvers)))

    return dom
}

function getTeamScoreDisplayElement(teamName, team, maxOvers) {

    if (team.batting) {
        return (<h3>{teamName}&nbsp;&nbsp;&nbsp;&nbsp;{team.runs}/{team.wickets} in {team.oversPlayed}/{maxOvers}</h3>)
    } else {
        return (<p>{teamName} scored {team.runs}/{team.wickets} in {team.oversPlayed} overs</p>)
    }
}

const mapStateToTeamScoreProps = (state) => {

    return {
        //TODO - check why do we need to use state.game.game when using root reducer. When using game reducer only, state.game works.
        game: state.game
    }
}

const ConnectedTeamScore = connect(mapStateToTeamScoreProps)(TeamScore);
export default ConnectedTeamScore
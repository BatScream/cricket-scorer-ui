import React from 'react'
import { connect } from 'react-redux'

const TeamScore = (props) => {

    let game = props.game
    let teams = game.teams

    let html = []

    for (let teamName in teams) {

        let team = teams[teamName]

        if (team.batting) {

            html.push(<h3>{teamName}&nbsp;&nbsp;&nbsp;&nbsp;{team.runs}/{team.wickets} in {team.oversPlayed}/{game.totalOvers}</h3>)
        } else {
            html.push(<p>{teamName} scored {team.runs}/{team.wickets} in {team.oversPlayed} overs</p>)
        }

    }

    return html
}

const mapStateToTeamScoreProps = (state) => {

    return {
        //TODO - check why do we need to use state.game.game when using root reducer. When using game reducer only, state.game works.
        game: state.game.game
    }
}

const ConnectedTeamScore = connect(mapStateToTeamScoreProps)(TeamScore);
export default ConnectedTeamScore
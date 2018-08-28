import React from 'react'
import { connect } from 'react-redux'
import './teamscore.css'

const TeamScore = (props) => {

    const game = props.game
    const teams = game.teams

    const teamScore = []

    Object.keys(teams)
        .map(teamKey => getTeamScoreDisplayElement(teams[teamKey], game.maxOvers))
        .map((element, index) => (<div key={index} className="teamScore">{element}</div>))
        .forEach(element => teamScore.push(element))

    return teamScore
}

function getTeamScoreDisplayElement(team, maxOvers) {

    if (team.batting) {
        return (<h3>{team.name}<span className="score">{team.runs}/{team.wickets} in {team.oversPlayed}/{maxOvers}</span></h3>)
    } else {
        return (<p>{team.name} scored {team.runs}/{team.wickets} in {team.oversPlayed} overs</p>)
    }
}

const mapStateToTeamScoreProps = (state) => {
    return {
        game: state.game
    }
}

const ConnectedTeamScore = connect(mapStateToTeamScoreProps)(TeamScore);
export default ConnectedTeamScore
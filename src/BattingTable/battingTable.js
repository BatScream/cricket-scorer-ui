import React from 'react'
import { connect } from 'react-redux'
import { relative } from 'upath';



const BattingTable = (props) => {
console.log(props.battingStatics)
// debugger

return (
<div className="BattingTable">
<h5>Batting Table</h5>
<table >
<tr>
<th>Batsman</th>
<th>Runs</th>
<th>Balls</th>
<th>Fours</th>
<th>Sixes</th>
<th>Strike Rate</th>
</tr>
{props.battingStatics}
</table>
</div>
)
}

const getTableRowForPlayer = (playerName,battingStats) => {
return (
<tr>
<td>{playerName}</td>
<td>{battingStats.runs}</td>
<td>{battingStats.balls}</td>
<td>{battingStats.fours}</td>
<td>{battingStats.sixes}</td>
<td>{battingStats.strikeRate}</td>
</tr>
)

}


const mapStateBattingTableToDisplay = state => {
const game = state.game;
const currentTeam = game.currentBatsmen.team;
const playerDictionary = Object.assign({}, game.teams[currentTeam].players)

const battingStaticsDict = game.battingStats
const battingStatics = []

const strike1 = game.currentBatsmen.players[0]
const strike2 = game.currentBatsmen.players[1]

const currentPlayerOnSrike1 = playerDictionary[strike1]
const currentPlayerOnSrike2 = playerDictionary[strike2]

battingStatics.push(getTableRowForPlayer(<b>{currentPlayerOnSrike1.name +'*'}</b>,battingStaticsDict[strike1]))
battingStatics.push(getTableRowForPlayer(<b>{currentPlayerOnSrike2.name +'*'}</b>,battingStaticsDict[strike2]))

Object.keys(battingStaticsDict).map(function (key, index) {
const stats = battingStaticsDict[key];
if (stats.isOut) {
const player = playerDictionary[key]
console.log(key+' '+player)

battingStatics.push(getTableRowForPlayer(player.name,stats))
}
console.log("Current Player " + battingStatics);

});

console.log(battingStatics)


return { "battingStatics": battingStatics };
};



const ConnectedBattingTableDisplay = connect(mapStateBattingTableToDisplay)(BattingTable);


export default ConnectedBattingTableDisplay;

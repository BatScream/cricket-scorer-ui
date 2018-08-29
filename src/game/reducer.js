import {
  SET_CURRENT_SCORE,
  SET_EXTRAS,
  ACTION_UPDATE_CURRENT_OVER_FOR_BALL,
  ACTION_UPDATE_EXTRA_FOR_CURRENT_BOWLER
} from "./actions";

 const initialState = {
  maxOvers: 20,

  currentBallsRun : 0,
  currentBallsExtra : 'B',
  currentBallsWicket : 'NWK',

  currentBowler: {
      team: "team2",
      player: 3
  },
  currentBatsmen: {
    team:
      "team1" /*instead of using team id, we can check for which team is batting currently*/,
    players: [1, 2],
    onStrike: 1
  },
  teams: {
    team1: {
      name: "Team 1",
      runs: 120,
      wickets: 7,
      oversPlayed: 15.4,
      batting: true /*This can be moved to a higher level*/,
      players: {
        1: { name: "Sachin" },
        2: { name: "Sehwag" }
      }
    },
    team2: {
        name: "Team 2",
        runs: 150,
        wickets: 5,
        oversPlayed: 20,
        batting: false,
        players: {
          1: { 
            name: "Brett Lee" ,
            battingStats: {
              runs : 0,
              balls:0,
              fours:0,
              sixes:0,
              strikeRate:0
            },
            bowlingStats:{
              overs:0,
              maiden:0,
              run:0,
              wicket:0,
              extras :0
            }
          },
          2: { 
            name: "Brett Lee" ,
            battingStats: {
              runs : 0,
              balls:0,
              fours:0,
              sixes:0,
              strikeRate:0
            },
            bowlingStats:{
              overs:0,
              maiden:0,
              run:0,
              wicket:0,
              extras :0

            }
          },
          3: { 
            name: "Virat Kohli" ,
            battingStats: {
              runs : 0,
              balls:0,
              fours:0,
              sixes:0,
              strikeRate:0
            },
            bowlingStats:{
              overs:0,
              maiden:0,
              run:0,
              wicket:0,
              extras :0
            }
          }
        }

      }
    },
    currentOver: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SCORE:
      return { ...state, currentSelectedScore: action.value };
    case SET_EXTRAS:
      //TODO this need to be modified for the state
      return { ...state, currentSelectedExtra: action.value };
    case ACTION_UPDATE_CURRENT_OVER_FOR_BALL:
      state.currentOver.push(action.updateOver);
      return { ...state, currentOver: state.currentOver };
    case ACTION_UPDATE_EXTRA_FOR_CURRENT_BOWLER :
        let bowlerTeam = state.currentBowler.team;
        let bowlerid= state.currentBowler.player;
        let currentExtras = state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras;
        if(state.currentBallsExtra !== 'B'){
            if(state.currentBallsExtra !== null)
            {
            currentExtras +=  1;
            state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras=currentExtras;
          }
        }
      return { ...state, state: state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras };
    default:
      return state;
  }
};

export {reducer,initialState};

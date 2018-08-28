import { SET_CURRENT_SCORE, SET_EXTRAS, ACTION_UPDATE_CURRENT_OVER_FOR_BALL } from "./actions";

const initialState = {

    maxOvers: 20,

    teams: {
        team1: {
            name: "Team 1",
            runs: 120,
            wickets: 7,
            oversPlayed: 15.4,
            batting: true
        },
        team2: {
            name: "Team 2",
            runs: 150,
            wickets: 5,
            oversPlayed: 20,
            batting: false
        }
    },

    currentOver: []
    // tempOver : [
    //     { runs: 3, extras: 'B', wicket: 'NWk' },
    //     { runs: 5, extras: 'N', wicket: 'Wk' },
    //     { runs: 6, extras: 'LB', wicket: 'NWK' }
    // ],
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
        default:
            return state;
    }
}

export default reducer;

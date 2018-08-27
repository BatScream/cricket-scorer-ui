const initialState = {
  
        totalOvers: 20,
        teams: {
            "Team 1": {
                runs: 120,
                wickets: 7,
                oversPlayed: 15.4,
                batting: true

            },
            "Team 2": {
                runs: 150,
                wickets: 5,
                oversPlayed: 20,
                batting: false

            }
        }
    
}

const reducer = (state = initialState, action) => {
    return state;
};

export default reducer;
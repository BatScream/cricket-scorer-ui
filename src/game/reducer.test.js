import reducer from './reducer'

test('should return initial start when reducer is called for the first time', () => {
    
    const expectedState = {
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
        }
    }

    expect(expectedState).toEqual(reducer(undefined, {type:'@@INIT'}));
})
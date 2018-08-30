import { updateBatsmanStateWithCurrentScore,resetCurrentScore}  from "./currentBatsmanScoreUpdateReducer";
import {gameState} from "./state";

test("should increase the current batsman satistics by 1 run",()=>{
    let copiedGameState = getDeepCopyForObject(gameState)
    let expectedGameState =  getDeepCopyForObject(gameState)
    expectedGameState.battingStats[1].runs = 1
    expectedGameState.battingStats[1].balls = 1
    expectedGameState.currentSelectedScore = {value:1,label:1}
    copiedGameState.currentSelectedScore = {value:1,label:1}
    expect(updateBatsmanStateWithCurrentScore(copiedGameState)).toEqual(expectedGameState)
})

test("should increase the current batsman satistics for 6 by 6 runs ",()=>{
    let copiedGameState = getDeepCopyForObject(gameState)
    let expectedGameState = getDeepCopyForObject(gameState)
    expectedGameState.battingStats[1].runs = 6
    expectedGameState.battingStats[1].sixes = 1
    expectedGameState.battingStats[1].balls = 1

    copiedGameState.currentSelectedScore = {value:6,label:6}
    expectedGameState.currentSelectedScore = {value:6,label:6}
    expect(updateBatsmanStateWithCurrentScore(copiedGameState)).toEqual(expectedGameState)
})

test("should increase the current batsman satistics for 4 by 4 runs",()=>{
    let copiedGameState = getDeepCopyForObject(gameState)
    let expectedGameState = getDeepCopyForObject(gameState)
    expectedGameState.battingStats[1].runs = 4
    expectedGameState.battingStats[1].fours = 1
    expectedGameState.battingStats[1].balls = 1

    copiedGameState.currentSelectedScore = {value:4,label:4}
    expectedGameState.currentSelectedScore = {value:4,label:4}
    expect(updateBatsmanStateWithCurrentScore(copiedGameState)).toEqual(expectedGameState)
})

test("should increase the current batsman satistics for 4 by 4 runs with existing 4 runs",()=>{
    let expectedGameState = getDeepCopyForObject(gameState)
    expectedGameState.battingStats[1].runs = 8
    expectedGameState.battingStats[1].fours = 2
    expectedGameState.battingStats[1].balls = 2
    expectedGameState.currentSelectedScore = {value:4,label:4}
    let copiedGameState =  getDeepCopyForObject(gameState)
    copiedGameState.currentSelectedScore = {value:4,label:4}
    copiedGameState = updateBatsmanStateWithCurrentScore(copiedGameState)
    copiedGameState.currentSelectedScore = {value:4,label:4}
    expect(updateBatsmanStateWithCurrentScore(copiedGameState)).toEqual(expectedGameState)
})

test("should reset current selected score to empty",()=>{
    let expectedGameState = getDeepCopyForObject(gameState)
    expectedGameState.battingStats[1].runs = 4
    expectedGameState.battingStats[1].fours = 1
    expectedGameState.battingStats[1].balls = 1
    let copiedGameState =  getDeepCopyForObject(gameState)
    copiedGameState.currentSelectedScore = {value:4,label:4}
    copiedGameState = updateBatsmanStateWithCurrentScore(copiedGameState)
    copiedGameState = resetCurrentScore(copiedGameState)
    expect(copiedGameState).toEqual(expectedGameState)
})
test("should increase the balls played current batsman  by 1 ",()=>{
    let copiedGameState = getDeepCopyForObject(gameState)
    let expectedGameState =  getDeepCopyForObject(gameState)
    expectedGameState.battingStats[1].balls = 1
     expectedGameState.battingStats[1].runs = 4
    expectedGameState.battingStats[1].fours = 1
    expectedGameState.currentSelectedScore = {value:4,label:4}
    copiedGameState.currentSelectedScore = {value:4,label:4}
    expect(updateBatsmanStateWithCurrentScore(copiedGameState)).toEqual(expectedGameState)
})

function getDeepCopyForObject(state){
    const str = JSON.stringify(state)
    return JSON.parse(str)

}
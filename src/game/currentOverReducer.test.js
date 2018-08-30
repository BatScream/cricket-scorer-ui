import each from "jest-each";
import { currentOverReducer } from "./currentOverReducer";
import { gameState } from "./state";

each([
  [
    {
      currentSelectedScore: {
        label: 3,
        value: 3
      },
      currentSelectedExtra: {
        label: "B",
        value: 0
      },
      isOut: false,
      currentOver: []
    },
    {
      currentSelectedScore: {
        label: 3,
        value: 3
      },
      currentSelectedExtra: {
        label: "B",
        value: 0
      },
      isOut: false,
      currentOver: [
        {
          runs: 3,
          extras: "B",
          wicket: false
        }
      ]
    }
  ],
  [
    {
      currentSelectedScore: {
        label: 3,
        value: 3
      },
      currentSelectedExtra: {
        label: "B",
        value: 0
      },
      isOut: false,
      currentOver: [
        {
          runs: 4,
          extras: "B",
          wicket: false
        }
      ]
    },
    {
      currentSelectedScore: {
        label: 3,
        value: 3
      },
      currentSelectedExtra: {
        label: "B",
        value: 0
      },
      isOut: false,
      currentOver: [
        {
          runs: 4,
          extras: "B",
          wicket: false
        },
        {
          runs: 3,
          extras: "B",
          wicket: false
        }
      ]
    }
  ]
]).test(
  "should return expected current over state",
  (currentState, gameExpectedState) => {
    expect(currentOverReducer(currentState)).toEqual(gameExpectedState);
  }
);

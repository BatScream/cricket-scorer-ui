import {reducer ,initialState } from "./reducer";

test('should return initial start when reducer is called for the first time', () => {
    

    expect(initialState).toEqual(reducer(undefined, {type:'@@INIT'}));
})
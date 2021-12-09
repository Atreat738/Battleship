const { test, expect } = require('@jest/globals');
const Ship = require('./app');

//ship needs to be an object that:
//1.Has a length.

test('Did the ship array get built properly', () => {
    expect(Ship(4).shipArray).toEqual(['safe', 'safe', 'safe', 'safe'])
});

//2.Has either been hit or not been hit
test('Does the ship have a valid length', () => {
    expect(Ship(4).length).toBe(4)
});
//3.Has either been sunk or not sunk
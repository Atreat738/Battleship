const Ship = require('./app');

//ship needs to be an object that:
//1.Has a length.

test('What is the ship length?', () => {
    expect(Ship(4).length).toEqual(['safe', 'safe', 'safe', 'safe'])
} );

//2.Has either been hit or not been hit
//3.Has either been sunk or not sunk
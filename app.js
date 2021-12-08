function Ship(length) {
    return {
        length,
        hit: function(num) {
            //input number, and mark that position as hit
        },
        isSunk: function() {
            //Check to see if the ship is sunk or not.
        },
    }

}
module.exports = Ship;
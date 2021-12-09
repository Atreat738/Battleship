//Types of ships: Carrier(5), Battleship(4), Cruiser(3), Submarine(3), Destroyer(2)

function Ship(length) {
    
    function createShipArray() {
        let shipArray = [];
        for(i = 0; i < length; i++) {
            //shiplength will be an array which by default marks every spot in the array as safe(not hit) 
            shipArray.push('safe');
        }
         return shipArray;
    }

    // function hit(index) {
    //     let hitPosition = 
    // }




    return {
        length: length,
        shipArray: createShipArray(),
        hit: function(num) {
            //input number, and mark that position as hit
        },
        isSunk: function() {
            //Check to see if the ship is sunk or not.
        },

    }

}


module.exports = Ship;
function Ship(length) {
    
    function findlength() {
        let shipLength = [];
        for(i = 0; i < length; i++) {
            //shiplength will be an array which by default marks every spot in the array as safe(not hit) 
            shipLength.push('safe');
        }
         return shipLength;
    }

    
    return {
        length: findlength(length),
        hit: function(num) {
            //input number, and mark that position as hit
        },
        isSunk: function() {
            //Check to see if the ship is sunk or not.
        },
    }

}
module.exports = Ship;
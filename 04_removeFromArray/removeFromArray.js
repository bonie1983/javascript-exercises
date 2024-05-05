const removeFromArray = function(array, ...remove) {
    

    for (let i = 0; i < array.length; i++) {
        for (let x = 0; x < remove.length; x++) {
            const index = array.indexOf(remove[x])
            const corte = array.splice(index, 1)
        }

    return array
    }
};

console.log(removeFromArray([1, 2, 2, 3], 2))
// Do not edit below this line
module.exports = removeFromArray;

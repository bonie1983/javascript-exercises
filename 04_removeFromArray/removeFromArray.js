const removeFromArray = function(array, remove) {
    
    newArray = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (remove == array[i]) {
            delete array[i]
        } else {
            newArray.push(element)
        }
    }
    return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;

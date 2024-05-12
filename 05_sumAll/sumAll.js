const sumAll = function() {
    const array = arguments;
    let sum = 0;
    let counter = 0;

    if ((array[0] < 0) || (array[array.length -1] < 0) || typeof array[array.length -1] === "string" || isNaN(array[array.length -1])) {
        return "ERROR";
    } else if (array[0] < array[array.length -1 ]) {
        for (let i = 1; i <= array[array.length - 1]; i++) {
            counter++;
            sum = sum + counter;
        }
    } else if (array[0] > array[array.length -1 ]) {
        for (let i = 1; i <= array[0]; i++) {
            counter++;
            sum = sum + counter;
        }
    }
    console.log(typeof(array[array.length -1]));
    return sum;

};

console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
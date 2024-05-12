const sumAll = function() {
    const array = arguments;
    let sum = 0;
    let counter = 0;

    if (array[0] < array[array.length -1 ]) {
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
    return sum;
};

console.log(sumAll(4, 1));

// Do not edit below this line
module.exports = sumAll;



// return array[array.length - 1];
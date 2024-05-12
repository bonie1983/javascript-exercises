const sumAll = function() {
    const array = arguments;
    let sum = 0;
    for (let i = 1; i <= array[array.length - 1]; i++) {
        sum++;
        console.log(sum);
    }
    return sum;
};

console.log(sumAll(1, 4));


// Do not edit below this line
module.exports = sumAll;



// return array[array.length - 1];
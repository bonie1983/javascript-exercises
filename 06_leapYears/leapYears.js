const leapYears = function(year) {
    if (year % 4 === 0) {
        return true
    } else {
        return false
    }
};


console.log(1900 % 4)
console.log(700 % 4)
// Do not edit below this line
module.exports = leapYears;

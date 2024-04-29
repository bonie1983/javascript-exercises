const repeatString = function(word, num) {
    string = ""

    if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            string = string + word
        }
        return string;
    }
};

console.log(repeatString("hey", 3));


// Do not edit below this line
module.exports = repeatString;

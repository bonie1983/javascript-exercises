const reverseString = function(frase) {
    splitedWordArray = []
    wordReversed = ""

    for (let index = 0; index < frase.length; index++) {
        splitedWordArray.push(frase[index]);
    }
    arrayReversed = splitedWordArray.reverse()

    for (let i = 0; i < arrayReversed.length; i++) {
        wordReversed = wordReversed + arrayReversed[i]
    }

    return wordReversed

    
};

reverseString("Hola")
// Do not edit below this line
module.exports = reverseString;

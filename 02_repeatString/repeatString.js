const repeatString = function(inputString, numOfRepetitions) {
    let outputString = '';

    if (
        typeof inputString != 'string'
        || typeof numOfRepetitions != 'number'
        || numOfRepetitions < 0
    ) return 'ERROR';

    for (let i = 0; i < numOfRepetitions; i++) {
        outputString += inputString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;

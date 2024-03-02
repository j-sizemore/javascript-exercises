const reverseString = function(inputString) {
    let outputString = '';
    for (let i = inputString.length; i > 0; i--) {
        outputString += inputString.charAt(i - 1);
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;

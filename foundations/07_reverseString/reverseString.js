const reverseString = function(message) {
    let result = '';
    let len = message.length;

    for (let i = 0; i < len; i++) {
        result = message.at(i) + result;
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;

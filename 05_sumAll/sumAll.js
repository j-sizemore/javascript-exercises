const sumAll = function(inputInteger1, inputInteger2) {
    if (
        typeof inputInteger1 != 'number'
        || typeof inputInteger2 != 'number'
        || Math.min(inputInteger1, inputInteger2) < 0
    ) return 'ERROR';

    // get min and max of inputs so input can be in any order
    const startInteger = Math.min(inputInteger1, inputInteger2);
    const stopInteger = Math.max(inputInteger1, inputInteger2);

    let outputSum = 0;
    for (let i = startInteger; i <= stopInteger; i++) {
        outputSum += i;
    }

    return outputSum;
};

// Do not edit below this line
module.exports = sumAll;

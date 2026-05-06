const sumAll = function(boundA, boundB) {
    // input validation
    if (
        !Number.isInteger(boundA)
        || !Number.isInteger(boundB)
        || boundA < 0
        || boundB < 0
    ) return 'ERROR';

    let lo = Math.min(boundA, boundB);
    let hi = Math.max(boundA, boundB);
    let sum = 0;

    for (let i = lo; i <= hi; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

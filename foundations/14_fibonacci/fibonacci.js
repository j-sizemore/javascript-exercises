const fibonacci = function(inputIndex) {

    let index = parseInt(inputIndex);

    if (isNaN(index) || index < 0)
        return "OOPS";

    if (index == 0)
        return 0;

    let previous = [0, 0];
    let current = 1;

    for (let i = 2; i <= index; i++) {
        previous[0] = previous[1];
        previous[1] = current;
        current = previous[0] + previous[1];
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;

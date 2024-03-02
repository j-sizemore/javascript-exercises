const removeFromArray = function(inputArray, ...itemsToRemove) {
    let outputArray = inputArray;

    for (const itemToRemove of itemsToRemove) {
        outputArray = outputArray.filter( function(item) {
            return item !== itemToRemove;
        });
    }

    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;

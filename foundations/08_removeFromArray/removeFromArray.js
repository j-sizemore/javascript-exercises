const removeFromArray = function(arr, ...toRemove) {
    return arr.filter((elem) => {
        for (const arg of toRemove) {
            if (elem === arg) return false;
        }
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;

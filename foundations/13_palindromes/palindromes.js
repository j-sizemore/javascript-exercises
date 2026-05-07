const palindromes = function (str) {
    let len = str.length;

    let left = 0;
    let right = len - 1;

    while (left < right) {

        left = nextLetterIndex(str, left);
        right = nextLetterIndex(str, right, true);

        if (left < 0 || right < 0 || left > right) 
            return true;
        else if (str.at(left).toLowerCase() !== str.at(right).toLowerCase())
            return false;

        left++;
        right--;
    }

    return true;
};

// returns index of next letter or digit in str starting at and including start
// reverse == false => search left to right
// reverse == true => search right to left
// returns -1 if no letters or digits found
const nextLetterIndex = function(str, start, reverse = false) {

        let len = str.length;
        let index = start;
        let loopCond = true;

        while (loopCond) {

            charCode = str.charCodeAt(index);
            if (
                isDigitCode(charCode) 
                || isLowerCode(charCode) 
                || isUpperCode(charCode)
            ) break;

            if (reverse) {
                index--;
                loopCond = index >= 0;
            }
            else {
                index++;
                loopCond = index < len;
            }
            
        }

        return (index == len) ? -1 : index;

};

const isDigitCode = function(code) {
    return (48 <= code && code <= 57); 
};

const isLowerCode = function(code) {
    return (97 <= code && code <= 122); 
};

const isUpperCode = function(code) {
    return (65 <= code && code <= 90); 
};

// Do not edit below this line
module.exports = palindromes;

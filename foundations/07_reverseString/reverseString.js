const reverseString = function (str) {
    let reversedString = '';
    const splitString = str.split('');
    for (let i = splitString.length - 1; i >= 0; i--) {
        reversedString += splitString[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

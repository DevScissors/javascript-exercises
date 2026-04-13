const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    let sum = 0;
    const rangeArr = [num1, num2];
    const sortedRangeArr = rangeArr.sort((a, b) => a - b);
    for (let i = sortedRangeArr[0]; i < sortedRangeArr[1] + 1; i++) {
        sum = sum + i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;

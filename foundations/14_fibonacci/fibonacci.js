const fibonacci = function (fibNum) {
    if (fibNum < 0) {
        return "OOPS";
    }

    if (fibNum <= 1) {
        return parseInt(fibNum);
    }

    return parseInt(fibonacci(fibNum - 1) + fibonacci(fibNum - 2));
};

// Do not edit below this line
module.exports = fibonacci;

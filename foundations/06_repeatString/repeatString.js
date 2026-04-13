const repeatString = function (string, num) {
    if (num < 0) {
        return console.log("ERROR");
    }
    let repeatedString = '';
    for (let i = 0; i < num; i++) {
        repeatedString += string;
    }
    console.log(repeatedString);
};

// Do not edit below this line
module.exports = repeatString;

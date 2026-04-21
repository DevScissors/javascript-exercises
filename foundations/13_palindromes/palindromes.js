const palindromes = function (str) {
    // 1. Convert to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // 2. Perform the check (using simple reversal here)
    return cleanStr === cleanStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

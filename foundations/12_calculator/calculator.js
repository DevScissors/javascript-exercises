const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  return nums.reduce((num, value) => num += value, 0)
};

const multiply = function (nums) {
  return nums.reduce((acc, current) => acc * current, 1);
};

const power = function (base, exponenet) {
  return base ** exponenet;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

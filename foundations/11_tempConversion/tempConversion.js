const convertToCelsius = function (fahrenheit) {
  const tempToCelcius = (fahrenheit - 32) / (9 / 5);
  return Math.round(tempToCelcius * 10) / 10;
};

const convertToFahrenheit = function (celcius) {
  const tempToFarenheit = (celcius * 9 / 5) + 32;
  return Math.round(tempToFarenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

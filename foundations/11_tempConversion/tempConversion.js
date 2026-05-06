const convertToCelsius = function(tempF) {
  // tempC = (tempF - 32) * 5/9
  let scale = 5 / 9;
  let shift = 32;

  let result = (tempF - shift) * scale;

  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  // tempF = (tempC x 9/5 + 32)
  let scale = 9 / 5;
  let shift = 32;

  let result = (tempC * scale) + shift;

  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const convertToCelsius = function(tempInFarenheit) {
    // (deg C) = ((deg F) - 32) * 5 / 9
    // multiply and divide by 10 to round to one decimal place
    return Math.round((tempInFarenheit - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function(tempInCelsius) {
  // (deg F) = (deg C) * 9 / 5 + 32
  // multiply and divide by 10 to round to one decimal place
  return Math.round((tempInCelsius * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

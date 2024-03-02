const add = function(inputNumber1, inputNumber2) {
	return inputNumber1 + inputNumber2;
};

const subtract = function(inputNumber1, inputNumber2) {
  return inputNumber1 - inputNumber2;
};

const sum = function(inputArray) {
	let outputSum = 0;
  for (const number of inputArray) {
    outputSum += number;
  }
  return outputSum;
};

const multiply = function(inputArray) {
	let outputProduct = 1;
  for (const number of inputArray) {
    outputProduct *= number;
  }
  return outputProduct;
};

const power = function(base, power) {
  let outputProduct = 1;
	const newBase = (power < 0) ? (1 / base) : base;
  for (let i = 0, newPower = Math.abs(power); i < newPower; i++) {
    outputProduct *= newBase;
  }  
  return outputProduct;
};

const factorial = function(inputInteger) {
  let outputProduct = 1;
  for (let i = inputInteger; i > 1; i--) {
    outputProduct *= i;
  }
  return outputProduct;
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

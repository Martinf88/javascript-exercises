const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArr) {
  return numArr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (numArr) {
  return numArr.reduce((acc, curr) => acc * curr, 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (n) {
  // resultatet skall bli n * n -1 så länge n är större än 0
  // om n = 0 relustatet skall bli 1
  // skapa en variabel med värdet 1
  // for loop tills index är lika med n

  let result = 1;
  for (i = 2; i <= n; i++) {
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
  factorial,
};

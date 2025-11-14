const sumAll = function (smallerVal, greaterVal) {
  if (!Number.isInteger(smallerVal) || !Number.isInteger(greaterVal))
    return "ERROR";
  if (smallerVal < 0 || greaterVal < 0) return "ERROR";

  if (smallerVal > greaterVal) {
    const temp = smallerVal;
    smallerVal = greaterVal;
    greaterVal = temp;
  }

  let totalVal = 0;
  for (i = smallerVal; i <= greaterVal; i++) {
    totalVal += i;
  }
  return totalVal;
};

// Do not edit below this line
module.exports = sumAll;

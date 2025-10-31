const sumAll = function(val1, val2) {
    if (!Number.isInteger(val1) || !Number.isInteger(val2)) return "ERROR"
    if(val1 < 0 || val2 < 0) return "ERROR"

    const numbersArray = []
    numbersArray.push(val1, val2)
    numbersArray.sort()
    
    let sum = 0;
    for (let i = numbersArray[0]; i <= numbersArray[1]; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;

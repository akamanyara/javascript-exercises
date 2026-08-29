const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) return "ERROR";

    // [lower, upper] range
    let lowerLimit = (a <= b) ? a : b;
    let upperLimit = (a >= b) ? a : b;
    let sum = 0;

    for (let i = lowerLimit; i <= upperLimit; ++i) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

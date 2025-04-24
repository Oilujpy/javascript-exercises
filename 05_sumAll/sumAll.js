const sumAll = function (min, max) {
    let sum = 0;
    let index = Math.min(min, max);
    const range = Math.max(min, max);

    if (min < 0 || max < 0
        || Number.isInteger(min) === false
        || Number.isInteger(max) === false) {
        return "ERROR"
    } else {
        for (index; index <= range; index++) {
            sum += index;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
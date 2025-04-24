const repeatString = function (string, num) {
    let i = 0;
    let result = "";
    if (num >= 0) {
        while (i < num) {
            result += string;
            i++;
        }
        return result;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;

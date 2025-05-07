// for any n > 2: Fn = Fn-1 + Fn-2  
const fibonacci = function (input) {
    let cleanInput = Number(input);
    if (cleanInput < 0) return "OOPS";
    if (cleanInput === 0) return 0;
    if (cleanInput === 1 || cleanInput === 2) return 1;

    let result = 0;
    const nMinus2 = fibonacci(input - 2);
    const nMinus1 = fibonacci(input - 1);
    result += nMinus1 + nMinus2;
    return result;
};

// Do not edit below this line
module.exports = fibonacci;

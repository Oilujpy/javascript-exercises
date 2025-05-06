const palindromes = function (input) {
    const cleanInput = input.toLowerCase().replace(/[^0-9a-zA-Z]/g, "").split("");
    const originalSplit = cleanInput.slice();
    const reverseCleanInput = cleanInput.reverse();
    for (let i = 0; i < cleanInput.length; i++) {
        if (originalSplit[i] === reverseCleanInput[i]) {
            continue; 
        } else{
           return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

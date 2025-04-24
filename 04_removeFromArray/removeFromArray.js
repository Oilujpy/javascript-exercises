const removeFromArray = function (array, ...args) {
    const newArray = array.filter((item) => {
        if (args.includes(item) === false) {
            return item;
        }
    }
    );
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

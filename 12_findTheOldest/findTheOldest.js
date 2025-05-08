const findTheOldest = function(arrayOfObjects) {
    let oldest = arrayOfObjects.sort((a,b) => {
        const CURRENT_YEAR = new Date().getFullYear();
        if (!b.hasOwnProperty('yearOfDeath') || !a.hasOwnProperty('yearOfDeath')) {
            return (CURRENT_YEAR - b.yearOfBirth) - (CURRENT_YEAR - a.yearOfBirth)
        } else {
            return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
        }
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function(array) {
    return array.sort((firstPerson, secondPerson) => {
        if(!firstPerson.yearOfDeath) firstPerson.yearOfDeath = new Date().getFullYear();
        if(!secondPerson.yearOfDeath) secondPerson.yearOfDeath = new Date().getFullYear();
        return (secondPerson.yearOfDeath - secondPerson.yearOfBirth) - (firstPerson.yearOfDeath - firstPerson.yearOfBirth);
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;

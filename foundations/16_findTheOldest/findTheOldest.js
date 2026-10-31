function getAge(person) {
    if (!person.yearOfDeath) {
        person.yearOfDeath = (new Date()).getFullYear();
    }
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    let oldestPerson = people.reduce((currentOldest, currentPerson) => {
        let ageOld = getAge(currentOldest);
        let ageCurr = getAge(currentPerson);

        if (ageCurr > ageOld) {
            return currentPerson;
        } else {
            return currentOldest;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

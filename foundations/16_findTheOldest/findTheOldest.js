const findTheOldest = function (people) {
    let oldestPerson = people.map((person) => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        let totalAge = person.yearOfDeath - person.yearOfBirth;
        return {
            name: person.name,
            age: totalAge
        };
    })
    let oldest = oldestPerson[0];
    for (let i = 1; i < oldestPerson.length; i++) {
        if (oldestPerson[i].age > oldest.age) {
            oldest = oldestPerson[i];
        }
    }
    console.log(oldest);
    return people.find(person => person.name === oldest.name);
};

findTheOldest(
    [
        {
            name: "Carly",
            yearOfBirth: 1942,
            yearOfDeath: 1970
        },
        {
            name: "Ray",
            yearOfBirth: 1962,
            yearOfDeath: 2011,
        },
        {
            name: "Jane",
            yearOfBirth: 1912,
            yearOfDeath: 1941,
        },
    ]
)

// Do not edit below this line
module.exports = findTheOldest;

const persons = [
    { name: "Kalle", age: 25, length: 180 },
    { name: "Pelle", age: 30, length: 190 },
    { name: "Lisa", age: 28, length: 201 },
    { name: "Kajsa", age: 32, length: 212 },
    { name: "Erik", age: 27, length: 225 },
    { name: "Eva", age: 24, length: 230 },
    { name: "Lars", age: 31, length: 172 },
    { name: "Maria", age: 29, length: 175 }
]
const persons2 = [
    { name: "Sven", age: 25, length: 187 },
    { name: "Maja", age: 30, length: 192 },
    { name: "Wille", age: 28, length: 173 },
    { name: "Simon", age: 32, length: 165 },
]

persons.push(...persons2)
const filteredPersons = persons.filter(person => person.length > 200)
filteredPersons.forEach(person => console.log(person))

function choosePerson(person) {
    switch (Number.parseInt(person)) {
        case 0:
            console.log("Nisse");
            return "Nisse";
            break;
        case 1:
            console.log("Per");
            return "Per";
            break;
        case 2:
            console.log("Johannes");
            return "Johannes";
            break;
        case 3:
            console.log("Joakim");
            return "Joakim";
            break;
        default:
            console.log("Hans");
            return "Hans";
            break;
    }
}

function logCity(cityCode) {
    cityCode = Number.parseInt(cityCode);
    switch (true) {
        case (cityCode === 0):
            console.log("Umeå");
            return "Umeå";
            break;
        case (cityCode >= 1 && cityCode <= 5):
            console.log("Stockholm");
            return "Stockholm";
            break;
        case (cityCode >= 6 && cityCode <= 9):
            console.log("Mora");
            return "Mora";
            break;
        case (cityCode >= 10 && cityCode <= 14):
            console.log("Västerås");
            return "Västerås";
            break;
        case (cityCode >= 15 && cityCode <= 19):
            console.log("Göteborg");
            return "Göteborg";
            break;
        default:
            console.log("Malmö");
            return "Malmö";
            break;
    }
}
var names = ["Kalle", "Lisa", "Erik", "Maria", "Anna"];
names.pop()
names[1] = "Kajsa";
names.push("Joakim");
names.sort((a, b) => a.localeCompare(b));
let indexOfJoakim = names.indexOf("Joakim")
names.splice(indexOfJoakim, 1);
names.forEach(name => console.log(name));
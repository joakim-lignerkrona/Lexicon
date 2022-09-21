var names = ["Kalle", "Lisa", "Erik", "Maria", "Anna"];
names.pop()
names[1] = "Kajsa";
names.push("Joakim");
names.sort(function (a, b) {
    return a.localeCompare(b);
});
let indexOfJoakim = names.indexOf("Joakim")
names.splice(indexOfJoakim, 1);
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
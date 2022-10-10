let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");

burger.addEventListener("click", function () {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
})

let functionsDiv = document.querySelector("#functions");
let outputDiv = document.querySelector("#output");

let personFunction = document.querySelector("#personFunction");
let nameFunction = document.querySelector("#nameFunction");
let cityFunction = document.querySelector("#cityFunction");

let selectApplication = document.querySelector("#selectApplication");
let personSelect = document.querySelector("#personSelect");

let personOutput = document.querySelector("#personOutput");
let nameOutput = document.querySelector("#nameOutput");
let cityOutput = document.querySelector("#cityOutput");

clearPage();
setPersonSelect();
selectFunction(selectApplication.value);

selectApplication.addEventListener("change", function () {
    clearPage();
    selectFunction(selectApplication.value);
})

function selectFunction(selectApplicationValue) {
    switch (Number.parseInt(selectApplicationValue)) {
        case 0:
            initPersonFunction();
            break;
        case 1:
            initNameFunction();
            break;
        case 2:
            initCityFunction();
            break;
        default:
            break;
    }
}
function initCityFunction() {
    functionsDiv.appendChild(cityFunction);
    outputDiv.appendChild(cityOutput);
    selectCity();
    cityFunction.querySelector("#cityNumber").addEventListener("input", function () {
        selectCity();
    })
}

function selectCity() {
    let cityNumber = cityFunction.querySelector("#cityNumber").value;
    cityOutput.querySelector("#city").innerText = logCity(cityNumber);
}

function clearPage() {
    clearFunctions();
    clearOutputs();

    function clearOutputs() {
        personOutput.remove();
        nameOutput.remove();
        cityOutput.remove();
    }

    function clearFunctions() {
        personFunction.remove();
        nameFunction.remove();
        cityFunction.remove();
    }
}

function initNameFunction() {
    functionsDiv.appendChild(nameFunction);
    outputDiv.appendChild(nameOutput);
    selectName();
    nameFunction.querySelector("#nameNumber").addEventListener("input", function () {
        selectName();
    })
}
function selectName() {
    nameOutput.querySelector("#name").innerText = choosePerson(nameFunction.querySelector("#nameNumber").value);

}


function initPersonFunction() {
    functionsDiv.appendChild(personFunction);
    outputDiv.appendChild(personOutput);
    selectPerson();
    personFunction.querySelector("#personSelect").addEventListener("change", function () {
        selectPerson();
    })
}
function selectPerson() {
    let selectedPerson = persons.find(person => person.name === personSelect.value);
    personOutput.querySelector("#personName").innerText = selectedPerson.name;
    personOutput.querySelector("#personAge").innerText = selectedPerson.age;
    personOutput.querySelector("#personLength").innerText = selectedPerson.length;
}
function setPersonSelect() {
    personFunction.querySelectorAll("option").forEach(option => {
        option.remove();
    });
    persons.forEach(person => {
        let option = document.createElement("option");
        option.value = person.name;
        option.innerText = person.name;
        personFunction.querySelector("#personSelect").appendChild(option);
    });
}
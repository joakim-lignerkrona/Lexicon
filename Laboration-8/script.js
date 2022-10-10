let formInputs = document.querySelectorAll("input")
let select = document.querySelector("select")
const submitButton = document.querySelector("button");

formInputs.forEach((input) => {
    if (input.type === "submit") {
        input.addEventListener("click", (event) => {
            event.preventDefault()
            validateForm()
        })
        return
    }
    input.addEventListener("input", (event) => {
        validateRow(input)
    })
})
select.addEventListener("change", (event) => {
    validateRow(select)
})

function validateRow(posts) {
    let input = posts
    if (
        input.value !== undefined
        && input.value !== ""
        && !input.validity.typeMismatch
        && !input.validity.tooLong
        && !input.validity.tooShort
        && handleSpecisalCases(posts)
    ) {
        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
        return true
    }
    return false
}
function validateForm() {
    let errors = []
    formInputs.forEach((input) => {
        if (input.type === "submit") {
            return
        }
        if (!validateRow(input)) {
            errors.push(input)
        }
    })
    if (!validateRow(select)) {
        errors.push(select)
    }
    handleErrorsOrSubmit(errors);
}

function handleSpecisalCases(formInput) {
    switch (formInput.name) {
        case "email":
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formInput.value)
        case "password":
            return formInput.value.length >= 8
        case "passwordRepeat":
            return formInput.value === formInput.parentNode.parentNode.password.value
        case "country":
            return formInput.value !== "none"
        case "agree":
            return formInput.checked
        default:
            return true
    }
}

function handleErrorsOrSubmit(errors) {
    if (errors[0]) {
        errors[0].focus()
    }
    errors.forEach((error) => {
        error.classList.add("is-invalid");
    });
    if (errors.length === 0) {
        console.log("no errors");
        submitForm(posts);
    }
}

function submitForm(posts) {
    console.table(posts);
}
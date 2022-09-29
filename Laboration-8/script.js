let formInputs = document.querySelectorAll("input")
formInputs.forEach((input) => {
    input.addEventListener("on", (event) => {
        let input = event.target
        let value = input.value
        console.log(value)
    })
})
let partOneOutput = document.querySelector("#part-one p")
let partOneInput = document.querySelector("#part-one button")

let partTwoOutput = document.querySelector("#part-two a")
let partTwoInput = document.querySelector("#part-two button")

let partThreeOutput = document.querySelector("#part-three .output")
let partThreeInputs = document.querySelectorAll("#part-three form input")
let partThreeButton = document.querySelector("#part-three form button")

partOneInput.addEventListener("click", () => {
    partOneOutput.textContent = "Denna paragraf är ny och fräsch."
})

partTwoInput.addEventListener("click", () => {
    partTwoOutput.href = "https://google.com"
})

partThreeButton.addEventListener("click", (e) => {
    e.preventDefault()
    partThreeOutput.textContent = `Kubens volym är: ${kub(partThreeInputs[0].value, partThreeInputs[1].value, partThreeInputs[2].value)}`


})

function kub(width, height, depth) {
    if (width > 0 && height > 0 && depth > 0) {
        return width * height * depth
    }

    return "Inte definierbar"
}

let formInputs = document.querySelectorAll("input")
let select = document.querySelector("select")
const submitButton = document.querySelector("button");
let post = {}

formInputs.forEach((input) => {
    post[input.name] = { value: undefined, element: input }
    if (input.type === "submit") {
        input.addEventListener("click", (event) => {
            event.preventDefault()
            validateForm(post)
        })
        return
    }


    input.addEventListener("input", (event) => {
        let input = event.target
        let value = input.value
        if (input.type === "submit") {
            return
        }
        if (input.checked) {
            post[input.name] = { value: true, element: input }
            return
        }
        else if (!input.checked && input.type === "checkbox") {
            post[input.name] = { value: false, element: input }
            return
        }
        post[input.name] = { value, element: input }
        validateRow(input, value)
    })
})
select.addEventListener("change", (event) => {
    let input = event.target
    let value = input.value
    post[input.name] = { value, element: input }
    validateRow(input, value)
})
post[select.name] = { value: undefined, element: select }
function validateForm(posts) {
    let errors = []
    for (const key in posts) {
        if (posts.hasOwnProperty(key)) {
            const post = posts[key];
            post.element.classList.remove("is-invalid")
            if (post.value === undefined || post.value === "") {
                if (post.element.name !== "submit") {
                    errors.push(post.element)
                }
            } else {
                post.element.classList.add("is-valid")
            }
        }
    }
    errors.forEach((error) => {
        error.classList.add("is-invalid")
    })
    if (errors.length === 0) {
        console.log("no errors");
        submitForm(posts)
    }

}
function submitForm(posts) {
    console.table(posts);
}
function validateRow(input, value) {
    if (value === undefined || value === "") {
        /* input.classList.remove("is-valid")
        input.classList.add("is-invalid") */
    } else {
        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
    }
}
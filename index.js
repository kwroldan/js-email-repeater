const button = document.querySelector("button");
const output = document.querySelector("#email-output");
const input = document.querySelector("#email-input");

function displayEmail(){
    output.textContent = `${input.value}`
}

button.addEventListener("click", event => {
    displayEmail()
})
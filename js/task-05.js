const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", newOutput);

function newOutput(event) {
    textOutput.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        textOutput.textContent = "Anonymous";
    };
}
const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", validationBlur);

function validationBlur(event) {

    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
    } else {
        event.currentTarget.classList.add("invalid");
    }
}
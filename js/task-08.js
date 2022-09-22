const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitLogin);

function submitLogin(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget; 

    if (email.value === "" || password.value === "") {
        console.log("Wrong. Write email and password!");
    } else {
        console.log(`Email: ${email.value} and Password: ${password.value}`);
        event.currentTarget.reset();
    };
};

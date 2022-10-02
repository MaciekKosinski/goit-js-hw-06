const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitLogin);

function submitLogin(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget; 

    if (email.value === "" || password.value === "") {
        window.alert("Wrong. Write email and password!");
    } else {
        console.log({
            email: `${email.value}`,
            password: `${password.value}`
        });
        event.currentTarget.reset();
    };
};

const inputEmail = document.getElementById('input-email');
const inpuPassword = document.getElementById('input-password');
const spanEmailWarning = document.getElementById('email-warning');
const spanPasswordWarning = document.getElementById('password-warning');

const login = () => {

    let email = inputEmail.value;
    let password = inpuPassword.value;

    spanEmailWarning.textContent = "";
    spanPasswordWarning.textContent = "";

    if (email == "") {
        spanEmailWarning.textContent = "this field cannot be empty";
    }
    
    if (password == "") {
        spanPasswordWarning.textContent = "this field cannot be empty";
    }

}


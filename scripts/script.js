import { loginAction } from "login.js";
import { registerAction } from "register.js";

let bubbles = document.getElementsByClassName('bg-bubbles')[0];
for (let i = 0; i <= 60; i++) {
    miniBubble = document.createElement('li');
    bubbles.appendChild(miniBubble);   
}
let loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', (event) => {
	event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username.length == 0 || password.length == 0) {
        alert('Please enter your email and password');
        return false;
    }
    loginAction(username, password);
});
let registerButton = document.getElementById('register-button');
registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    let first_name = document.getElementById('first-name').value;
    let last_name = document.getElementById('last-name').value;
    let age = document.getElementById('age').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile-number').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    if ( username.length == 0 || password.length == 0 || email.length == 0 || mobile.length == 0 || first_name.length == 0 || last_name.length == 0 || age.length == 0 || confirmPassword.length == 0 ) {
        alert("PLease make sure that all the fields are filled");
        return false;
    }
    if (password != confirmPassword) {
        document,getElementById('confirm-password-message').innerText = "Passwords do not match";
        return false;
    }
    registerAction(first_name, last_name, age, username, email, mobile, password);
});
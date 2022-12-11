import { loginAction } from "./login.js";
import { registerAction } from "./register.js";
import { nameCheck, userNameCheck, addressCheck, emailCheck, mobileCheck, ageCheck, passwordCheck } from "./validation.js";


let bubbles = document.getElementsByClassName('bg-bubbles')[0];
let loginSubmit = document.getElementById('login_form');
let registerSubmit = document.getElementById('register_form');
let userName = document.getElementById('username');
let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let age = document.getElementById('age');
let mobile = document.getElementById('mobile_number');
let address = document.getElementById('address');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_password');
for (let i = 0; i <= 60; i++) {
    let miniBubble = document.createElement('li');
    bubbles.appendChild(miniBubble);   
}
if (loginSubmit) {
    loginSubmit.addEventListener('submit', (event) => {
        if (userName.value.length == 0 || password.value.length == 0) {
            event.preventDefault();
            alert('Please enter your email and password');
            return false;
        }
        if (loginAction(userName.value, password.value)){
            return true
        }
        else{
            return false
        }
    });
}
if (registerSubmit) {
    registerSubmit.addEventListener('submit', (event) => {
        if ( userName.value.length == 0 || password.value.length == 0 || email.value.length == 0 || mobile.value.length == 0 || firstName.value.length == 0 || lastName.value.length == 0 || age.value.length == 0 || confirmPassword.value.length == 0 ) {
            event.preventDefault();
            alert("PLease make sure that all the fields are filled");
            return false;
        }
        if (password.value != confirmPassword.value) {
            document,getElementById('confirm-password-message').innerText = "Passwords do not match";
            event.preventDefault();
            return false;
        }
        if (registerAction(firstName.value, lastName.value, age.value, userName.value, email.value, mobile.value, password.value)){
            return true
        }
    });
}
if (userName) {
    userName.addEventListener('keyup', function(event) {
        let error = document.getElementById('username-message');
        userNameCheck(userName.value, error);
    });
}

if (firstName) {
    firstName.addEventListener('keyup', function(event) {
        let error = document.getElementById('first-name-message'); 
        nameCheck(firstName.value, error);
    });
}

if (lastName){
    lastName.addEventListener('keyup', function(event) {
        let error = document.getElementById('last-name-message'); 
        nameCheck(lastName.value, error);
    });
}

if (age) {
    age.addEventListener('keyup', function(event){
        let error = document.getElementById('age-message');
        ageCheck(age.value, error);
    });
}

if (mobile) {
    mobile.addEventListener('keyup', function(event) {
        let error = document.getElementById('mobile-message');
        mobileCheck(mobile.value, error);
    });
}

if (address){
    address.addEventListener('keyup', function(event){
        let error = document.getElementById('address-message');
        addressCheck(address.value, error);
    });
}

if (email) {
    email.addEventListener('keyup', function(event) {
        let error = document.getElementById('email-message');
        emailCheck(email.value, error);
    });
}

if (password) {
    password.addEventListener('keyup', function(event) {
        let error = document.getElementById('password-message');
        passwordCheck(password.value, error);
    });
}

if (confirmPassword){
    confirmPassword.addEventListener('keyup', function(event) {
        let error = document.getElementById('confirm-password-message');
        if (password.value == confirmPassword.value) {
            error.innerText = "Passwords match";
            error.style.color = 'green';
        } else {
            error.innerText = "Passwords do not match";
            error.style.color = 'red';
        }
    });
}

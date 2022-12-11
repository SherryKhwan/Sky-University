import { nameCheck, userNameCheck, addressCheck, emailCheck, mobileCheck, ageCheck, passwordCheck } from "./validation.js";

export function registerAction(firstName, lastName, userName, email, mobile, age, password) {
    let firstNameElement = document.getElementById("first-name-message");
    let lastNameElement = document.getElementById("last-name-message");
    let userNameElement = document.getElementById("username-message");
    let addressElement = document.getElementById("address-message");
    let emailElement = document.getElementById("email-message");
    let mobileElement = document.getElementById("mobile-message");
    let ageElement = document.getElementById("age-message");
    let passwordElement = document.getElementById("password-message");
    let confirmPasswordElement = document.getElementById("confirm-password-message");
    if (userNameElement.innerText == "Username is valid" && passwordElement.innerText == "Password is valid" && firstNameElement.innerText == "Name is valid" && lastNameElement.innerText == "Name is valid" && addressElement.innerText == "Address is valid" && emailElement.innerText == "Email is valid" && mobileElement.innerText == "Mobile is valid" && ageElement.innerText == "Age is valid" && confirmPasswordElement.innerText == "Password is valid") {
        let heading = document.getElementById("animation")
        heading.classList.add("animation");
        heading.innerText = `Welcome ${userName}, registration successfully completed`;
        // document.getElementsByClassName('guide')[0].style.opacity = 0;
        document.getElementsByTagName('form')[0].style.opacity = 0;
        document.getElementById("animation").classList.add("animation");
        return true;
    }
    return false;
}
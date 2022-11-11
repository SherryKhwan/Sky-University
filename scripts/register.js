import { nameCheck, userNameCheck, emailCheck, mobileCheck, ageCheck, passwordCheck } from "validation.js";

export function registerAction(firstName, lastName, userName, email, mobile, age, password) {
    let firstNameMessage = nameCheck(firstName);
    let lastNameMessage = nameCheck(lastName);
    let userNameMessage = userNameCheck(userName);
    let emailMessage = emailCheck(email);
    let mobileMessage = mobileCheck(mobile);
    let ageMessage = ageCheck(age);
    let passwordMessage = passwordCheck(password);
    setRegisterMessages(firstNameMessage, lastNameMessage, userNameMessage, emailMessage, mobileMessage, ageMessage, passwordMessage);
    if (userNameMessage == "Username is valid" && passwordMessage == "Password is valid" && firstNameMessage == "Name is valid" && lastNameMessage == "Name is valid" && emailMessage == "Email is valid" && mobileMessage == "Mobile is valid" && ageMessage == "Age is valid") {
        document.getElementsByTagName('form')[0].style.opacity = 0;
        document.getElementById("animation").classList.add("animation");
        return true;
    }
    else{
        return false;
    }
}

function setRegisterMessages(firstNameMessage, lastNameMessage, userNameMessage, emailMessage, mobileMessage, ageMessage, passwordMessage) {
    document.getElementById("first-name-message").innerHTML = firstNameMessage;
    document.getElementById("last-name-message").innerHTML = lastNameMessage;
    document.getElementById("register-username-message").innerHTML = userNameMessage;
    document.getElementById("email-message").innerHTML = emailMessage;
    document.getElementById("mobile-message").innerHTML = mobileMessage;
    document.getElementById("age-message").innerHTML = ageMessage;
    document.getElementById("register-password-message").innerHTML = passwordMessage;
}
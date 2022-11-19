import { userNameCheck, passwordCheck } from "./validation.js";

export function loginAction(userName, password) {
    let userNameElement = document.getElementById("username-message");
    let passwordElement = document.getElementById("password-message");
    userNameCheck(userName, userNameElement);
    passwordCheck(password, passwordElement);
    if (userNameElement.innerText == "Username is valid" && passwordElement.innerText == "Password is valid") {
        // Now will do the server side validation
        let heading = document.getElementById("animation")
        heading.classList.add("animation");
        heading.innerText = `Welcome ${userName}`;
        document.getElementsByTagName('form')[0].style.opacity = 0;
        document.getElementsByClassName('guide')[0].style.opacity = 0;
        return true
    }
    return false
}

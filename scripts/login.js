import { userNameCheck, passwordCheck } from "validation.js";

export function loginAction(userName, password) {
    let userNameMessage = userNameCheck(userName);
    let passwordMessage = passwordCheck(password);
    if (userNameMessage == "Username is valid" && passwordMessage == "Password is valid") {
        document.getElementById('login-username-message').innerText = userNameMessage;
        document.getElementById('login-password-message').innerText = passwordMessage;
        document.getElementsByTagName('form')[0].style.opacity = 0;
        document.getElementById("animation").classList.add("animation");
    }
    else{
        document.getElementById("username-login-message").innerHTML = userNameMessage;
        document.getElementById("password-login-message").innerHTML = passwordMessage;
    }
}

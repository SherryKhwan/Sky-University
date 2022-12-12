export function registerAction(email) {
    let emailElement = document.getElementById("email-message");
    let passwordElement = document.getElementById("password-message");
    let confirmPasswordElement = document.getElementById("confirm-password-message");
    if (passwordElement.innerText == "Password is valid" && emailElement.innerText == "Email is valid" && confirmPasswordElement.innerText == "Password match") {
        let heading = document.getElementById("animation")
        heading.classList.add("animation");
        heading.innerText = `Welcome ${email}, registration successfully completed`;
        document.getElementsByTagName('form')[0].style.opacity = 0;
        document.getElementById("animation").classList.add("animation");
        return true;
    }
    return false;
}
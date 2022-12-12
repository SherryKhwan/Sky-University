
export function loginAction(email) {
    let emailElement = document.getElementById("email-message");
    let passwordElement = document.getElementById("password-message");
    if (emailElement.innerText == "Email is valid" && passwordElement.innerText == "Password is valid") {
        // Now will do the server side validation
        let heading = document.getElementById("animation")
        heading.classList.add("animation");
        heading.innerText = `Welcome ${email}`;
        document.getElementsByTagName('form')[0].style.opacity = 0;
        document.getElementsByClassName('guide')[0].style.opacity = 0;
        return true
    }
    return false
}

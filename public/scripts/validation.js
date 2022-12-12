let rgName = /^[A-Za-z ]{3,40}$/;
let rgUserName = /^[A-Za-z0-9_]{5,30}$/;
let rgEmail = /^[A-Za-z0-9._ ]{5,30}[@][a-z]{5,8}[.][a-z]{2,5}$/;
let rgMobile = /^[0-9]{11}$/;
let rgAddress = /^[A-Za-z0-9-#,. ]{10,70}$/
let rgAge = /^[0-9]{1,5}$/;
let rgPassword = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?\/_₹]).{10,16}$/;

export function nameCheck(name, errorElement) {
    if (rgName.test(name)) {
        setMessage(errorElement, "Name is valid", "green");
    }
    else {
        setMessage(errorElement, "Name is invalid", "red");
    }
}

export function userNameCheck(userName, errorElement) { 
    if (rgUserName.test(userName)) {
        setMessage(errorElement, "Username is valid", "green");
    }
    else {
        setMessage(errorElement, "Username is invalid", "red");
    }
}

export function addressCheck(address, errorElement) { 
    if (rgAddress.test(address)) {
        setMessage(errorElement, "Address is valid", "green");
    }
    else {
        setMessage(errorElement, "Address is invalid", "red");
    }
}

export function emailCheck(email, errorElement) {
    if (rgEmail.test(email)) {
        setMessage(errorElement, "Email is valid", "green");
    }
    else {
        setMessage(errorElement, "Email is invalid", "red");
    }
}


export function mobileCheck(mobile, errorElement) {
    if (rgMobile.test(mobile)) {
        setMessage(errorElement, "Mobile number is valid", "green");
    }
    else {
        setMessage(errorElement, "Mobile number is invalid", "red");
    }
}

export function ageCheck(age, errorElement)  { 
    if (rgAge.test(age)) {
        setMessage(errorElement, "Age is valid", "green");
    }
    else {
        setMessage(errorElement, "Age is invalid", "red");
    }
}

export function passwordCheck(password, errorElement) {
    if (rgPassword.test(password)) {
        setMessage(errorElement, "Password is valid", "green");
    }
    else {
        setMessage(errorElement, "Password is invalid format", "red");
    }
}

function setMessage(element, message, style) {
    element.innerText = message;
    element.style.color = style;
}
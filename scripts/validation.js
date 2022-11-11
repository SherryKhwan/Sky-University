let rgName = /^[A-Za-z ]{3,40}$/;
let rgUserName = /^[A-Za-z0-9_]{5,30}$/;
let rgEmail = /^[A-Za-z0-9._ ]{5,30}[@][a-z]{5,8}[.][a-z]{2,5}$/;
let rgMobile = /^[0-9]{11}$/;
let rgAge = /^[0-9]{1,5}$/;
let rgPassword = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?\/_₹]).{10,16}$/;

export function nameCheck(name) {
    if (rgName.test(name)) {
        return "Name is valid";
    }
    else {
        return "Name is invalid format";
    }
}

export function userNameCheck(userName) { 
    if (rgUserName.test(userName)) {
        return "Username is valid";
    }
    else {
        return "Username is invalid format";
    }
}


export function emailCheck(email) {
    if (rgEmail.test(email)) {
        return "Email is valid";
    }
    else {
        return "Email is invalid format";
    }
}


export function mobileCheck(mobile) {
    if (rgMobile.test(mobile)) {
        return "Mobile is valid";
    }
    else {
        return "Mobile is invalid format";
    }
}

export function ageCheck(age) { 
    if (rgAge.test(age)) {
        return "Age is valid";
    }
    else {
        return "Age is invalid format";
    }
}

export function passwordCheck(password) {
    if (rgPassword.test(password)) {
        return "Password is valid";
    }
    else {
        return "Password is invalid format, please make sure that the password contains at least 10 characters, an uppercase letter, a lowercase letter, a number and a special character";
    }
}

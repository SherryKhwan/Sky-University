let login_button = document.getElementById('login-button');
login_button.addEventListener('click', (e) => {
	e.preventDefault();
	document.getElementsByTagName('form')[0].style.opacity = 0;
    // document.getElementsByClassName("wrapper").classList.add("form-success");
    document.getElementById("animation").classList.add("animation");
});

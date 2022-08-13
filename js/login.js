var loginFunction = document.getElementById("login-function");
var registerFunction = document.getElementById("register-function");

loginFunction.addEventListener("click", showLogin);
registerFunction.addEventListener("click", showRegister);

function showLogin() {
    loginFunction.classList.add("active");
    registerFunction.classList.remove("active");
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
}

function showRegister() {
    registerFunction.classList.add("active");
    loginFunction.classList.remove("active");
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
}
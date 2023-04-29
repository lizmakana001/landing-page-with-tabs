const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

function showSignupForm() {
  loginForm.style.display = "none";
  signupForm.style.display = "flex";
}

function saveUserData() {
  // I dont have the codes for saving user data in sql but i know it goes here

function init() {
  const signupButton = document.getElementById("signup-button");
  signupButton.addEventListener("click", showSignupForm);

  const signupForm = document.getElementById("signup-form");
  signupForm.addEventListener("submit", saveUserData);
}

init();
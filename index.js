// const pattern =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%#*?&]{8,10}$/;
// const testString = "SAba#!234";
// console.log(pattern.test());
// testString;

// document.getElementById("form").addEventListener("submit", function (e) {
//   let formIsValid = true;
//   const emailPattern =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%#*?&]{8,10}$/;
//   const emailInput = document.getElementById("email").value;
//   const error = document.getElementById("error");
//   if (!emailPattern.test(emailInput)) {
//     error.textContent = "Your Email is Invalid!";
//     formIsValid = false;
//   } else {
//     error.textContent = "";
//   }

//   if (!formIsValid) {
//     e.preventDefault();
//   }
// });

const form = document.getElementById("form");
const error = document.getElementById("error");
const nameError = document.getElementById("nameError");
const passwordError = document.getElementById("passwordError");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[a-zA-Z0-9]{8,20}$/;
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%#*?&]{8,10}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("userName");
  const passwordInput = document.getElementById("password");
  let successMessage = document.getElementById("successMessage");
  let isValid = true;
  if (!emailPattern.test(emailInput.value)) {
    error.textContent = "Your Email is Invalid!";
    emailInput.style.border = "1px solid red";
    isValid = false;
  } else {
    error.textContent = "";
  }

  if (!namePattern.test(nameInput.value)) {
    nameError.textContent = "Your userName is Invalid!";
    nameInput.style.border = "1px solid red";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  if (!passwordPattern.test(password.value)) {
    passwordError.textContent = "Your Password is Invalid!";
    passwordInput.style.border = "1px solid red";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    successMessage.style.display = "block";
    successMessage.textContent = "Form submitted successfully!";
    successMessage.style.color = "green";
    emailInput.style.border = "1px solid green";
    nameInput.style.border = "1px solid green";
    passwordInput.style.border = "1px solid green";
  } else {
    successMessage.textContent = "";
  }
});

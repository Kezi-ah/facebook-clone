// document.getElementById("signupForm").addEventListener("submit", function(e) {
//   e.preventDefault(); // stop form submission

//   const firstName = document.getElementById("firstName");
//   const surname = document.getElementById("surname");
//   const age = document.getElementById("age");
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");

//   validateField(firstName, firstName.value.trim() !== "", "What's your name?");
//   validateField(surname, surname.value.trim() !== "", "Enter your surname");
//   validateField(age, /^\d+$/.test(age.value) && age.value > 0, "Enter a valid age");
//   validateField(email, /^[^@]+@[^@]+\.[^@]+$/.test(email.value), "Enter a valid email");
//   validateField(password, /^(?=.*[0-9]).{6,}$/.test(password.value), "Password must be 6+ chars with a number");
// });

// function validateField(input, condition, message) {
//   let errorIcon = input.nextElementSibling;
//   let errorMsg = errorIcon.nextElementSibling;

//   if (!condition) {
//     input.classList.add("error");
//     errorIcon.style.display = "inline";
//     errorMsg.style.display = "inline-block";
//     errorMsg.textContent = message;
//   } else {
//     input.classList.remove("error");
//     errorIcon.style.display = "none";
//     errorMsg.style.display = "none";
//   }
// }


document
  .getElementById("userForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    const nameError = document.getElementById("name-error");
    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById(
      "confirm-password-error"
    );

    // Clear previous errors
    nameError.textContent = "";
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "" || name.length < 3) {
      nameError.textContent = "Name is required.";
      isValid = false;
    } else {
      hideFeedback("name-error");
    }

    // Username validation
    if (username === "" || username.length < 3) {
      usernameError.textContent =
        "Username must be at least 3 characters.";
      isValid = false;
    } else {
      hideFeedback("username-error");
    }

    // Email validation
    if (!validateEmail(email)) {
      emailError.textContent = "Invalid email address.";
      isValid = false;
    } else {
      hideFeedback("email-error");
    }

    // Password validation
    if (!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
      passwordError.textContent =
        "Password must contain at least 8 characters, including a number, an uppercase letter, and a lowercase letter.";
      isValid = false;
    } else {
      hideFeedback("password-error");
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      isValid = false;
    } else {
      hideFeedback("confirm-password-error");
    }

    // If all validations pass
    if (isValid) {
      alert("Registration Successful!");
      e.target.reset();
    }
  });

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Hide feedback function
function hideFeedback(id) {
  document.getElementById(id).textContent = "";
}

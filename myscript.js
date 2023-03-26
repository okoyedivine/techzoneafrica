function validateForm() {
  const name = document.getElementById("name").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name === "") {
    alert("Name must be filled out");
    return false;
  }

  if (username === "") {
    alert("Username must be filled out");
    return false;
  }

  if (username.length < 3 ||username.length >10) {
    alert("Username length must be between 3 and 10 letters");
    return false;
  }


  if (email === "") {
    alert("Email must be filled out");
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Invalid email format");
    return false;
  }

  if (password === "") {
    alert("Password must be filled out");
    return false;
  }

  if (!isPasswordValid(password)) {
    alert("Password must contain at least one capital letter, one special character, one number, and be at least 6 characters long.");
    return false;
  }

  alert("SUCCESS!");
  return true;
}



function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}



function isPasswordValid(password) {
  const capitalLetterRegex = /[A-Z]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const numberRegex = /\d/;
  
  if (!capitalLetterRegex.test(password)) {
    return false;
  }

  if (!specialCharRegex.test(password)) {
    return false;
  }

  if (!numberRegex.test(password)) {
    return false;
  }

  if (password.length < 6) {
    return false;
  }

  return true;
}


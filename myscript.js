function validateForm() {
  const name = document.getElementById("name").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password1 = document.getElementById("password1").value.trim();
  const password2 = document.getElementById("password2").value.trim();

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

  if (password1 === "") {
    alert("Password must be filled out");
    return false;
  }

  if (!isPasswordValid(password1)) {
    alert("Password must contain at least one capital letter, one special character, one number, and be at least 6 characters long.");
    return false;
  }

  if (!doPasswordsMatch(password1, password2)) {
    alert("Passwords do not match.");
    return false;
  }

  alert("SUCCESS! Check your email for verification link");
  return true;
}


//function to check if email is valid
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

//function to check if password is valid

function isPasswordValid(password1) {
  const capitalLetterRegex = /[A-Z]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const numberRegex = /\d/;
  
  if (!capitalLetterRegex.test(password1)) {
    return false;
  }

  if (!specialCharRegex.test(password1)) {
    return false;
  }

  if (!numberRegex.test(password1)) {
    return false;
  }

  if (password1.length < 6) {
    return false;
  }

  return true;
}



//function to check if password 1 and 2 match

function doPasswordsMatch(password1, password2) {
  if (password1 !== password2) {
    return false;
  }
  return true;
}



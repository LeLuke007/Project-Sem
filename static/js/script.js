document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");

  // Sign-Up Functionality
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("signup-username").value.trim();
      const password = document.getElementById("signup-password").value.trim();

      if (!username || !password) {
        alert("Please fill in all fields.");
        return;
      }

      // Store user credentials in localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some(user => user.username === username);

      if (userExists) {
        alert("Username already exists. Please choose a different username.");
      } else {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Sign-Up Successful! Please log in.");
        window.location.href = "login.html";
      }
    });
  }

  // Login Functionality
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const loginUsername = document.getElementById("login-username").value.trim();
      const loginPassword = document.getElementById("login-password").value.trim();

      if (!loginUsername || !loginPassword) {
        alert("Please fill in all fields.");
        return;
      }

      // Retrieve user credentials from localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const validUser = users.find(
        user => user.username === loginUsername && user.password === loginPassword
      );

      if (validUser) {
        alert("Login Successful!");
        localStorage.setItem("loggedInUser", loginUsername); // Store logged-in user
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid Credentials. Please try again.");
      }
    });
  }
});

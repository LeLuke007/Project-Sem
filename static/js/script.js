document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");

  // Sign-Up Functionality
  if (signupForm) {
    signupForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const username = document.getElementById("signup-username").value.trim();
      const password = document.getElementById("signup-password").value.trim();

      if (!username || !password) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
          alert("Sign-Up Successful! Please log in.");
          window.location.href = "login.html";
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    });
  }

  // Login Functionality
  if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const loginUsername = document.getElementById("login-username").value.trim();
      const loginPassword = document.getElementById("login-password").value.trim();

      if (!loginUsername || !loginPassword) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: loginUsername, password: loginPassword })
        });

        const data = await response.json();

        if (data.success) {
          alert("Login Successful!");
          localStorage.setItem("loggedInUserId", data.userId); // Store logged-in user ID
          localStorage.setItem("loggedInUser", data.userName); // Store logged-in user ID
          window.location.href = "dashboard.html";
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    });
  }
});

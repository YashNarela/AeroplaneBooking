const container = document.querySelector(".container");

const registerButton = document.querySelector(".register-btn");

const loginButton = document.querySelector(".login-btn");

registerButton.addEventListener("click", () => {
  container.classList.add("active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("active");
});

const loginForm = document.querySelector(".form-box.login form");
const registerForm = document.querySelector(".form-box.register form");

// Toggle between login and register panels
registerButton.addEventListener("click", () => {
  container.classList.add("register-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("register-active");
});

// Handle registration
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get user input
  const username = registerForm
    .querySelector('input[placeholder="Username"]')
    .value.trim();
  const email = registerForm
    .querySelector('input[placeholder="Email"]')
    .value.trim();
  const password = registerForm.querySelector(
    'input[placeholder="password"]'
  ).value;

  alert(password);
  if (!username || !email || !password) {
    alert("All fields are required.");
    return;
  }

  // Retrieve existing users from local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the username or email already exists
  const userExists = users.some(
    (user) =>
      user.username.toLowerCase() === username.toLowerCase() ||
      user.email.toLowerCase() === email.toLowerCase()
  );

  if (userExists) {
    alert("User already exists. Please use a different username or email.");
  } else {
    // Add the new user to the users array
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now log in.");
    // Switch to login panel
    container.classList.remove("register-active");
    registerForm.reset();
  }
});

// Handle login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get login input
  const username = loginForm
    .querySelector('input[placeholder="Username"]')
    .value.trim();
  const password = loginForm.querySelector(
    'input[placeholder="password"]'
  ).value;

  if (!username || !password) {
    alert("Both fields are required.");
    return;
  }

  // Retrieve user data from local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) =>
      user.username.toLowerCase() === username.toLowerCase() &&
      user.password === password
  );

  if (user) {
    alert(`Welcome back, ${user.username}! You are successfully logged in.`);
    // Redirect or show logged-in view (example: redirect to a dashboard page)
    window.location.href = "/index.htm";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

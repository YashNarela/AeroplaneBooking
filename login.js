function showSignup() {
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("message").innerText = "";
}

function showLogin() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("message").innerText = "";
}

function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  if (username && password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      alert("Username already exists!");
    } else {
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful!");
      showLogin(); 
    }
  } else {
    alert("Please enter both username and password.");
  }
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (validUser) {
    document.getElementById("message").innerText = `Welcome, ${username}!`;
  } else {
    alert("Invalid username or password.");
  }
}


showSignup();

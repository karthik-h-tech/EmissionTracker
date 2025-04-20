// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Simple validation
    if (email && password) {
      alert("Login successful!");
      window.location.href = "index.html"; // ✅ Redirect to homepage
    } else {
      alert("Enter valid credentials.");
    }
  });
}

// SIGN UP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const region = document.getElementById("signupRegion").value;

    if (name && email && password && region) {
      alert("Sign up successful!");
      window.location.href = "index.html"; // ✅ Redirect to homepage instead of login
    } else {
      alert("Please fill all fields.");
    }
  });
}

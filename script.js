// Wait until the page loads
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    // Simple login validation (you can change these)
    const validUsername = "admin";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
      alert("✅ Login Successful! Welcome " + username);
    } else if (username === "" || password === "") {
      alert("⚠️ Please enter both username and password.");
    } else {
      alert("❌ Invalid username or password!");
    }
  });
});

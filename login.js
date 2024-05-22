document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Replace with actual authentication logic
    if (email === "user@example.com" && password === "password") {
        alert("Login successful!");
        window.location.href = "/dashboard";  // Redirect to dashboard
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

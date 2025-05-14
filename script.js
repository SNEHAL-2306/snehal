document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting until validation is done

    // Get input field values
    const username = document.getElementById("Username").value;
    const password = document.getElementById("password").value;
    const captchaInput = document.getElementById("captchaInput").value.trim(); // Get the entered captcha value and trim spaces
    const captchaCode = document.getElementById("captchaCode").textContent.trim(); // Get the captcha code displayed

    // Clear previous error message
    document.getElementById("errorMessage").textContent = "";

    // Validate username (email format)
    if (username === "") {
        document.getElementById("errorMessage").textContent = "Username (Email) is required.";
        return;
    } else if (!validateEmail(username)) {
        document.getElementById("errorMessage").textContent = "Please enter a valid email address.";
        return;
    }

    // Validate password
    if (password === "") {
        document.getElementById("errorMessage").textContent = "Password is required.";
        return;
    }

    // Validate captcha
    if (captchaInput === "") {
        document.getElementById("errorMessage").textContent = "Captcha is required.";
        return;
    }

    if (captchaInput !== captchaCode) {
        document.getElementById("errorMessage").textContent = "Captcha does not match.";
        return;
    }

    // If all validations pass, show a success message (in real case, submit the form)
    else
    alert("Login successful!");
});

// Simple email validation
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Function to refresh captcha
document.getElementById("refreshCaptcha").addEventListener("click", function() {
    // Generate a new random captcha code
    const randomCaptcha = generateRandomCaptcha();
    document.getElementById("captchaCode").textContent = randomCaptcha;  // Update the captcha code displayed
    document.getElementById("captchaInput").value = "";  // Clear the captcha input field
    document.getElementById("errorMessage").textContent = "";  // Clear any previous error message
});

// Function to generate random captcha
function generateRandomCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

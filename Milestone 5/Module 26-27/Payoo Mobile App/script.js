console.log("script loaded");

// login button functions

document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    //   console.log("Login button clicked");
    const mobileNumber = '01914995953';
    const pinNumber = '1234';
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const pinNumberValue = document.getElementById('pin-number').value;

    if (mobileNumberValue === mobileNumber && pinNumberValue === pinNumber) {
        console.log("Login successful");
        window.location.href = "home.html"; // Redirect to home.html
    } else {
        alert("Login failed");
    }
});
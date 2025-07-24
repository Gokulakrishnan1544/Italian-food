let form = document.getElementById("login");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form reload

    let userInput = document.getElementById("username").value.trim(); // this can be username or email
    let password = document.getElementById("password").value.trim();

    let msg = document.getElementById("msg");
    let msg2 = document.getElementById("msg2");

    // Input validation
    if (userInput === "" && password === "") {
        msg.innerText = "Username/Email and password cannot be empty";
        msg.style.color = "red";
        return;
    } 

    let store = JSON.parse(localStorage.getItem("userdata")); 

    if (!store) {
        msg.innerText = "No user found. Please register first.";
        msg.style.color = "red";
        return;
    }

    // Check if userInput matches username or email
    const isUserValid = (userInput === store.username || userInput === store.email) && password === store.password;

    if (isUserValid) {
        alert("Login successful!");
        window.location.href = "../pages/logged in.html";  // Redirect to homepage
    } else {
        msg.innerText = "Invalid username/email or password";
        msg.style.color = "red";
    }
});

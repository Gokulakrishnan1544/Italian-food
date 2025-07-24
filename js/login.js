let form = document.getElementById("login");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form reload

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let msg = document.getElementById("msg");
    let msg2 = document.getElementById("msg2");

    // Input validation
    if (username === "" && password === "") {
        msg.innerText = "Username and password cannot be empty";
        msg.style.color = "red";
        return;
    } 

    let store = JSON.parse(localStorage.getItem("userdata")); 

    if (!store) {
        msg .innerText = "No user found. Please register first.";
        msg.style.color = "red";
        return;
    }

    if (username === store.username && password === store.password) {
        alert("Login successful!");
        window.location.href = "../index.html";  // Redirect to homepage
    } else {
        msg.innerText = "Invalid username or password";
        msg.style.color = "red";
    }
});

let form = document.getElementById("registration")

form.addEventListener("submit", function(e){
    e.preventDefault();


let username = document.getElementById("Username").value.trim();
let email = document.getElementById("Email").value.trim();
let password = document.getElementById("password").value.trim();
let confirmpass = document.getElementById("confirmpass").value.trim();

let isvalid = true;


//username validation
if (username.length == 0) {
    document.getElementById("msg").innerHTML = " Username required"
    document.getElementById("msg").style.color = "red";
    isvalid = false;
} else if (username.length < 4  || username.length > 12) {
    document.getElementById("msg").innerHTML = " length between 5 to 12 characters";
    document.getElementById("msg").style.color = "red";
    isvalid = false;
} 
else{
    document.getElementById("msg").innerHTML = " ";
}

//email validation
let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (email.length == 0) {
    document.getElementById("msg2").innerHTML = " please enter your Emailid";
    document.getElementById("msg2").style.color = "red";
    isvalid = false;
} 
else if (!email.match(format)) {
    document.getElementById("msg2").innerHTML = " Invalid EmailID format";
    document.getElementById("msg2").style.color = " red "; 
    isvalid = false;
}
else  {
    document.getElementById("msg2").innerHTML = " ";
   
}

//password validation
if (password.length == 0) {
    document.getElementById("msg3").innerHTML = " password required";
    document.getElementById("msg3").style.color = " red ";
    isvalid = false;
} else if (password.length <= 7 || password.length > 12) {
    document.getElementById("msg3").innerHTML = " length between 7 to 12";
    document.getElementById("msg3").style.color = " red ";
    isvalid = false;
} else{
    document.getElementById("msg3").innerHTML = " "
}

//confirm pass validation

if (confirmpass.length == 0) {
    document.getElementById("msg4").innerHTML = " please enter your correct password ";
    document.getElementById("msg4").style.color = " red ";
    isvalid = false;
} else if (confirmpass.length !== password.length) {
    document.getElementById("msg4").innerHTML = " password does not match ";
    document.getElementById("msg4").style.color = " red ";
    isvalid = false;
} 
else{
    document.getElementById("msg4").innerHTML = "  ";    
}

if(isvalid){
let userdata = {username, email, password, confirmpass}
localStorage.setItem("userdata", JSON.stringify(userdata))

alert("Successfully registered!")


window.location.href = "login form.html"

}
}) 



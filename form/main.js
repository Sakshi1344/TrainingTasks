const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the password
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

// prevent form submit
const form1 = document.querySelector("form");
form1.addEventListener('submit', function (e) {
    e.preventDefault();
});



// js for store data in local storage
window.onload = function() {

    // Check for LocalStorage support.
    if (localStorage) {
  
      // Add an event listener for form submissions
      document.getElementById('form').addEventListener('submit', function() {
        // Get the value of the name field.
        var fname = document.getElementById('fname').value;
        var uname = document.getElementById('uname').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var password = document.getElementById('password').value;
        var confirmpass = document.getElementById('confirmpass').value;
        var male = document.getElementById('male').value;
        var female = document.getElementById('female').value;
        var other = document.getElementById('other').value;
  
        // Save the name in localStorage.
        localStorage.setItem('fname', fname);
        localStorage.setItem('uname', uname);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('password', password);
        localStorage.setItem('confirmpass', confirmpass);
        localStorage.setItem('male', male);
        localStorage.setItem('female', female);
        localStorage.setItem('other', other);
      });
  
    }
  
  }
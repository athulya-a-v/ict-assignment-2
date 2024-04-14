//var phonenumber = document.getElementById("phonenumber");
//var name1 = document.getElementById("name");
//var email = document.getElementById("email");
//var pass = document.getElementById("password");
//var pass2 = document.getElementById("repeatpassword");
//var error = document.getElementById("error");
//var errorname = deocument.getElementById("errorname");
//var erroremail = document.getElementById("erroremail");
//var errorpass = document.getElementById("errorpass");
//var errorpass2 = document.getElementById("errorpass2");
function validateForm() {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phonenumber').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('repeatpassword').value;
  
    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Phone number validation
    var phonePattern = /^(\d{3}[\s.-]?)?(\d{3}[\s.-]?)?\d{4}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid 10-digit phone number in the format xxx xxx xxxx, xxx.xxx.xxxx, or xxx-xxx-xxxx.');
      return false;
    }
  
    // Password validation
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
      alert('Please enter a valid password with at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.');
      return false;
    }
  
    // Confirm password validation
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please confirm your password.');
      return false;
    }
  
    // Password strength indicator
    var passwordStrength = getPasswordStrength(password);
    alert('Password strength: ' + passwordStrength);
    
    // Form is valid, submit the form
    return true;
  }
  
  function getPasswordStrength(password) {
    if (password.length >= 8 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      return 'strong';
    } else if (password.length >= 8 && /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      return 'medium';
    } else {
      return 'weak';
    }
  }
  


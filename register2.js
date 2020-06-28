function validateLengthOfUsername() {

  
  var username = document.getElementById("username").value;

  if (username.length >= 4) {
      
      checkIfUsernameExists(username);

  }
  else {
    alert("Please enter at least 4 characters for your username!")
    document.getElementById("status").innerHTML = "Please enter at least 4 characters for your username!";
  }

}




function checkIfUsernameExists(username) {

  fetch("https://restapits.herokuapp.com/")
    .then(result => {
      result.text().then(text => {

        var flag = false

        var jsonObject = JSON.parse(text)

        jsonObject.forEach(item => {

          
            if (item.username == username) {

              flag = true
              alert("This username already exists!")
              document.getElementById("status").innerHTML = "This username already exists!";

            }
          

        })

        validateForm(flag)

      })
    })
}


function sendConfirmEmail(username, password, email) {
  console.log("Sending confirm email....")

  var url = 'https://messenger.timoschessl.com/mailServerForMessenger.php';
  var formData = new FormData();
  formData.append('to', email);
  formData.append('password', password);
  formData.append('username', username);


  fetch(url, { method: 'POST', body: formData })
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      console.log(body);
    });

}


function validateForm(flag)
{
    if(flag)
    {
        return false;
    }
    else
    {
         var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         var username = document.getElementById("username").value;
         var email = document.getElementById("email").value;
         var password = document.getElementById("password").value;
         var repeatedPassword = document.getElementById("repeat").value;
         
          if (re.test(email) == true) {

      if (password.length >= 6) {

        if (password == repeatedPassword) {

          sendConfirmEmail(username, password, email)
          alert("Please check your email account.")
        }
        else {
          alert("The passwords dont match!")
          document.getElementById("status").innerHTML = "The passwords are not the same!";
        }

      }
      else {
        alert("Please enter at least 6 characters for the password!")
        document.getElementById("status").innerHTML = "Please enter at least 6 characters for the password!";
      }

    }
    else {
      alert("The email is not valid!")
      document.getElementById("status").innerHTML = "The email is not valid!";
    }
         
}
    
    
}





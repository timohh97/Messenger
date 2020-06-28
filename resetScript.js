function resetPassword()
{
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(re.test(email) == true)
    {
        checkIfEmailIsInDatabase(email,username);
    }
    else
    {
        alert("Please enter a valid username and email!");
        document.getElementById("status").innerHTML = "Please enter a valid username and email!";
    }
}


function checkIfEmailIsInDatabase(email,username)
{
     

     fetch("https://restapits.herokuapp.com/")
    .then(result => {
      result.text().then(text => {

        var flag = false

        var jsonObject = JSON.parse(text)

        jsonObject.forEach(item => {

          
            if (item.email == email && item.username == username) {

              flag = true
              sendResetPasswordEmail(email,username);

            }
          

        })
        
        if(!flag)
        {
        alert("Please enter a valid username and email!")
        document.getElementById("status").innerHTML = "Please enter a valid username and email!";
        }

      })
    })
}


function sendResetPasswordEmail(email,username)
{
  alert("Please check your email account to reset your password!")

  var url = 'https://messenger.timoschessl.com/mailServerForResetPassword.php';
  var formData = new FormData();
  formData.append('to', email);
  formData.append('username', username);

  fetch(url, { method: 'POST', body: formData })
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      console.log(body);
    });

}




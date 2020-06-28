function resetPassword()
{
    var oneTimePassword = document.getElementById("onetime").value;
    var passwordInput = document.getElementById("password").value;
    var repeatPasswordInput = document.getElementById("repeat").value;
    var usernameInput = document.getElementById("username").value;
    
    checkOneTimePassword(usernameInput,oneTimePassword,passwordInput,repeatPasswordInput);
}




function checkOneTimePassword(usernameInput,oneTimePassword,passwordInput,repeatPasswordInput)
{

     fetch("https://restapits.herokuapp.com/")
    .then(result => {
      result.text().then(text => {

        var flag = false

        var jsonObject = JSON.parse(text)

        jsonObject.forEach(item => {

          
            if (item.password == oneTimePassword && item.username == usernameInput) {

              flag = true
              checkNewPassword(usernameInput,passwordInput,repeatPasswordInput);

            }
          

        })
        
        if(!flag)
        {
        alert("Wrong one-time password or username!")
        document.getElementById("status").innerHTML = "Wrong one-time password or username!";
        }

      })
    })
}




function checkNewPassword(usernameInput,passwordInput,repeatPasswordInput)
{
    
    if(passwordInput.length>5)
    {
        if(passwordInput==repeatPasswordInput)
        {
            putNewPasswordIntoDatabase(passwordInput,usernameInput);
        }
        else
        {
            alert("The passwords dont match!")
        document.getElementById("status").innerHTML = "The passwords dont match!";
        }
    }
    else
    {
        alert("Please enter at least 6 characters for the password!")
        document.getElementById("status").innerHTML = "Please enter at least 6 characters for the password!";
        
    }
    
}


function putNewPasswordIntoDatabase(passwordInput,username)
{
    var passwordInputHashed = CryptoJS.MD5(passwordInput).toString();
    
           fetch("https://restapits.herokuapp.com/"+username, {
        method: 'PATCH', 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            
            password:passwordInputHashed
        })
        
    })
        .then(result => {
            console.log(result)
        })
        
        
  alert("Changed password successfully!")
}
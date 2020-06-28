function login()
{
  document.getElementById("status").innerHTML = "";
  var usernameInput = document.getElementById("username").value;
  var passwordInput = document.getElementById("password").value;

  var passwordInputHashed = CryptoJS.MD5(passwordInput).toString();

  fetch("https://restapits.herokuapp.com/")
    .then(result => {
      result.text().then(text => {

        var flag = false

        var jsonObject = JSON.parse(text)

        jsonObject.forEach(item => {

          if (!(typeof item.username === 'undefined')) {
            if (item.username == usernameInput && item.password == passwordInputHashed) {

              flag = true
              //alert("Login successful!")
              localStorage.setItem("userloggedin","true")
              localStorage.setItem("currentuser",usernameInput)
              window.open(href="./messenger.html","_self")

            }
          }

        })
        
        if(!flag)
        {
        alert("Login failed!")
        document.getElementById("status").innerHTML = "Login failed!";
        }

      })
    })
}
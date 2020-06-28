<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timo Schessl Messenger Reset Password</title>
    <link rel="stylesheet" href="passwordResetStyle.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/core.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.js"></script>
    <script src="resetPasswordLogicScript.js"></script>
</head>

<body>
   <script>
   
       var url_string = window.location.href; 
       
       var url = new URL(url_string);
       
       var username = url.searchParams.get("user");
       
       var onetimepass = url.searchParams.get("string");
       
       
       
       fetch("https://restapits.herokuapp.com/"+username, {
        method: 'PATCH', 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            
            password:onetimepass
        })
        
    })
        .then(result => {
            console.log(result)
        })
       
       
   </script>
    <div id="mainForm">
        <form>
            <div id="status"></div>
            <h2>Reseting your password</h2>
            <input type="text" placeholder="One-time password" id="onetime">
            <br><br>
            <input type="text" placeholder="Your username" id="username">
            <br><br>
            <input type="password" placeholder="New password" id="password">
            <br><br>
            <input type="password" placeholder="Repeat password" id="repeat">
            <br><br>
            <button onclick="resetPassword();return false;">Change password</button>
        </form>
    </div>
</body>

</html>
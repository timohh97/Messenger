function returnToLoginWindow() {
    localStorage.setItem("userloggedin", "false")
    localStorage.setItem("currentuser","")
    window.open(href = "./login.html", "_self")
}



function checkIfUserLoggedIn() {
    if (localStorage.getItem("userloggedin") == null || localStorage.getItem("userloggedin") == "false") {
        alert("Not allowed!")
        window.open(href = "./login.html", "_self")
    }
}




function updateDropDownMenu() {
    fetch("https://restapits.herokuapp.com/")
        .then(result => {
            result.text().then(text => {

                var flag = false

                var jsonObject = JSON.parse(text)

                var htmlstring = document.getElementById("dropdown").innerHTML;

                jsonObject.forEach(item => {

                    if (!(typeof item.username === 'undefined') && !(typeof item.email === 'undefined')) {
                        htmlstring += "<option value=" + item.email + ">" + item.username + "</option>";
                    }

                })

                document.getElementById("dropdown").innerHTML = htmlstring;

            })
        })
}



function sendEmail() {
    
    var dropdown = document.getElementById("dropdown");
    var emailOfTarget = dropdown.options[dropdown.selectedIndex].value
    document.getElementById("to").value=""+emailOfTarget;
    document.getElementById("from").value+=localStorage.getItem("currentuser");
   


}

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Timo Schessl Messenger Confirm Email</title>
        <link rel="stylesheet" href="confirmEmailStyle.css">
        
    </head>
    <body>
        <?php

$flagForUserAlreadyExists = false; 
        
$username = $_GET["username"];
        
$response = file_get_contents('https://restapits.herokuapp.com/');

$array = json_decode($response,true);

foreach($array as $item) 
{ 
    if($item['username']==$username)
    {
        $flagForUserAlreadyExists = true;
    }
}


if(!$flagForUserAlreadyExists)
{
$password = $_GET["password"];
$email = $_GET["email"];

// API URL
$url = 'https://restapits.herokuapp.com/';

// Create a new cURL resource
$ch = curl_init($url);

// Setup request to send json via POST
$data = array(
    'username' => $username,
    'password' => $password,
    'email' => $email
);

$payload = json_encode($data);

//echo $payload;

// Attach encoded JSON string to the POST fields
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

// Set the content type to application/json
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

// Return response instead of outputting
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the POST request
$result = curl_exec($ch);

// Close cURL resource
curl_close($ch);

//echo $result;

echo '<div id="message"><br>You confirmed your email address, now you can log in!</div>';
}
else
{
    echo '<div id="message"><br>Not allowed!</div>';
}


?>
        
        
        
    </body>
    
    
    
    
</html>




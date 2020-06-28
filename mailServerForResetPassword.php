<?php

$to = $_POST["to"];
$username = $_POST["username"];

$subject = "Timo Schessl Messenger Reseting Password";

$headers="Please click on this link to reset your password:";

$randomOneTimePassword =bin2hex(random_bytes(10));


$message = "https://messenger.timoschessl.com/passwordReset.php?string=".$randomOneTimePassword."&user=".$username."\n\n Please use this one-time password:".$randomOneTimePassword;

mail($to,$subject,$message,$headers);


?>
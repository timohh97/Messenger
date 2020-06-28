<?php

$to = $_POST["to"];
$password = $_POST["password"];
$username = $_POST["username"];

$passwordHashed = hash("md5",$password);

$message = "https://messenger.timoschessl.com/confirmEmail.php?username=".$username."&password=".$passwordHashed."&email=".$to."";

$subject = "Timo Schessl Messenger Registration";
$headers ="Please confirm your email adress by clicking this link:";

mail($to,$subject,$message,$headers);



?>
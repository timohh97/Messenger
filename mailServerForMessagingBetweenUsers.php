<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Timo Schessl Send Message</title>
        <link rel="stylesheet" href="sendMessage.css">
    </head>
    <body>
      
        
        <?php

$to = $_POST["to"];
$from = $_POST["from"];
$message = $_POST["message"];
$subject = "Timo Schessl Messenger";
$headers ="Message from ".$from.":";

if(strlen($message)>1)
{
    mail($to,$subject,$message,$headers);
    echo  "<script type='text/javascript'>alert('Your message was sent!');</script>";
    echo "<script>window.location = 'messenger.html'</script>";
}
else
{
    echo "<script type='text/javascript'>alert('Please enter at least 2 characters for your message!');</script>";
     echo "<script>window.location = 'messenger.html'</script>";
}


?>

        
    </body>

</html>

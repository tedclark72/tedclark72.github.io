<?php

if($_POST){
    $name = $_POST['contact-name'];
    $email = $_POST['contact-email'];
    $message = $_POST['contact-message'];

//send email
mail("tedclark72@gmail.com", "This is an email from:" .$email, $message);
}

?>

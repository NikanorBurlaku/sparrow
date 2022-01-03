<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$email = $_POST['email'];
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$date = htmlspecialchars($date);
$email = htmlspecialchars($email);
$name = urldecode($name);
$date = urldecode($date);
$phone = urldecode($phone);
$email = urldecode($email);
$name = trim($name);
$phone = trim($phone);
$date = trim($date);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("example@mail.ru", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: nicanorburlacu@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
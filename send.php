$date = $_POST['date'];
$tel = $_POST['tel'];

$date = htmlspecialchars($date);
$tel = htmlspecialchars($tel);

$date = urldecode($date);
$tel = urldecode($tel);

$date = trim($date);
$tel = trim($tel);

echo $date;
echo "<br>";
echo $tel;

mail("elle.sinelle@gmail.com", "Заявка с сайта", "телефон:".$tel.". дата: ".$date ,"From: mail_ellee@yahoo.com \r\n");

if (mail("elle.sinelle@gmail.com", "Заявка с сайта", "телефон:".$tel.". дата: ".$date ,"From: mail_ellee@yahoo.com \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
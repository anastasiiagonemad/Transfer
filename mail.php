<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){

!empty($_POST['NAME']) ? $name=strip_tags($_POST['NAME']):$result['status']='Обнаружена ошибка. Повторите отправку еще раз';
!empty($_POST['EMAIL']) ? $email=strip_tags($_POST['EMAIL']):$result['status']='Обнаружена ошибка. Повторите отправку еще раз';
!empty($_POST['COMMENT']) ? $comment=strip_tags($_POST['COMMENT']):$result['status']='Обнаружена ошибка. Повторите отправку еще раз';

// $mail=strip_tags($_POST['EMAIL']);
// $mes=strip_tags($_POST['MESSAGE']);


if(empty($result['status'])){
    $to  = "elle.sinelle@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $subject = "Сообщение с сайта";
    $headers = "From: Transfer mail_ellee@yahoo.com\r\n";
    $message = "Имя: $name <br> Tel: $phone <br> Сообщение: $comment";
    mail($to, $subject, $message, $headers);

    $result['status']='success';
}
else{
    $result['status']='Не заполнены обязательные поля.';
}

echo json_encode($result);
}
else{
//  header('Location: http://localhost/redirec2t.php ');
}
?>
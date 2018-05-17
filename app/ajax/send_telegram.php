<?php

/* https://api.telegram.org/bot419904607:AAHE1nCIhuVBtZQBv-4alo4CloLvjLr0m7Q/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$title = $_POST['title'];
$token = "419904607:AAHE1nCIhuVBtZQBv-4alo4CloLvjLr0m7Q";
$chat_id = "-260456085";
$arr = array(
    'Тема: ' => $title,
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email: ' => $email
);

foreach($arr as $key => $value) {
    if(!empty($value))
        $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    echo json_encode('OK');
} else {
    echo json_encode('ERROR');
}
?>
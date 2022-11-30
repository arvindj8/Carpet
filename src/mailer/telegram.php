
<?php

/* https://api.telegram.org/bot5794267493:AAHGbYED7oUnCskcfPRe3fCsoTHQfbjEGYM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$product = $_POST['product'];
$token = "5794267493:AAHGbYED7oUnCskcfPRe3fCsoTHQfbjEGYM";
$chat_id = "-1001693553829";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Изделие:' => $product
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }

// if ($sendToTelegram->send()) {
//     return true;
// } else {
//     return false;
// }
?>

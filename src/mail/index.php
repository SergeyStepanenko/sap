<?
if(
  (isset($_POST['name']) && $_POST['name']!="") &&
  (isset($_POST['phone']) && $_POST['phone']!="")
  ){
    $to = 'grover2006@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок'; //Загаловок сообщения
    $name = strip_tags($_POST['name']);
    $phone = strip_tags($_POST['phone']);

    $message = '
    <html>
    <head>
    <title>'.$subject.'</title>
    </head>
    <body>
    <p>Имя: '.$name.'</p>
    <p>Телефон: '.$phone.'</p>
    </body>
    </html>'; //Текст нащего сообщения можно использовать HTML теги

    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя

    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

    echo $name;
  }
?>

<?php

$recepient = "orientx@yandex.ru";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";
mail($recepient, $pagetitle, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
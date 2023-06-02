<?php
$con=new mysqli('localhost','root','','rezacorp_react');
$id=$_GET['id'];
$headline=$_POST['headline'];
$subtitle=$_POST['subtitle'];
$line1=$_POST['line1'];
$line1sub=$_POST['line1sub'];
$line2=$_POST['line2'];
$line2sub=$_POST['line2sub'];
$line3=$_POST['line3'];
$line3sub=$_POST['line3sub'];
$query="UPDATE `whyus` SET `headline` = '$headline', `line1` = '$line1', `line1sub` = '$line1sub', `line2` = '$line2', `line2sub` = '$line2sub', `line3` = '$line3', `line3sub` = '$line3sub' WHERE `whyus`.`id` =".$id;
$con->query($query);
header('Location: why_us.php');
?>
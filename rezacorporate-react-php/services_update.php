<?php
$con=new mysqli('localhost','root','','rezacorp_react');
$id=$_GET['id'];
$boxicon=$_POST['boxicon'];
$headline=$_POST['headline'];
$subtitle=$_POST['subtitle'];
$query="UPDATE `services` SET `boxicon` = '$boxicon', `headline` = '$headline', `subtitle` = '$subtitle' WHERE `services`.`id` =".$id;
$con->query($query);
header('Location: services_list.php');

?>
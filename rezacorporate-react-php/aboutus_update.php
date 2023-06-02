<?php
$con=new mysqli('localhost','root','','rezacorp_react');
$id=$_GET['id'];
$headline=$_POST['headline'];
$list1=$_POST['list1'];
$list2=$_POST['list2'];
$list3=$_POST['list3'];
$detail=$_POST['detail'];
$query="UPDATE `aboutus` SET `headline` = '$headline', `list1` = '$list1', `list2` = '$list2', `list3` = '$list3', `detail` = '$detail' WHERE `aboutus`.`id` =".$id;
$con->query($query);
header('Location: about_us.php');
?>
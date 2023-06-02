<?php
$con=new mysqli('localhost','root','','rezacorp_react');
$id=$_GET['id'];
$title=$_POST['title'];
$headline=$_POST['headline'];
$subtitle=$_POST['subtitle'];
$servicessub=$_POST['servicessub'];
$ctasub=$_POST['ctasub'];
$portfoliosub=$_POST['portfoliosub'];
$teamsub=$_POST['teamsub'];
$newslettersub=$_POST['newslettersub'];
$ftitle=$_POST['ftitle'];
$femail=$_POST['femail'];
$fphone=$_POST['fphone'];
$query="UPDATE `general` SET `title`='$title', `headline`='$headline', `subtitle`='$subtitle', `servicessub`='$servicessub', `ctasub`='$ctasub', `portfoliosub`='$portfoliosub', `teamsub`='$teamsub', `newslettersub`='$newslettersub', `ftitle`='$ftitle', `femail`='$femail', `fphone`='$fphone' WHERE `general`.`id`=".$id;
$con->query($query);
header('Location: general.php');

?>
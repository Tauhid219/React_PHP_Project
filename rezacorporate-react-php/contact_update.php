<?php
$con=new mysqli('localhost','root','','rezacorp_react');
$id=$_GET['id'];
$heading=$_POST['heading'];
$location=$_POST['location'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$query="UPDATE `contact` SET `heading`='$heading', `location`='$location', `email`='$email', `phone`='$phone' WHERE `contact`.`id`=".$id;
$con->query($query);
header('Location: contact.php');

?>
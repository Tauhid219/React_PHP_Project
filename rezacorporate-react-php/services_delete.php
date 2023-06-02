<?php
$con=new mysqli('localhost','root','','rezacorp_react');
$id=$_GET['id'];
$qu="delete from services where id=".$id;
$con->query($qu);
header('Location: services_list.php');
?>
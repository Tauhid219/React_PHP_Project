<?php
$con=new mysqli('localhost','root','','rezacorp_react');
$id=$_GET['id'];
$query="delete from team where id=".$id;
$con->query($query);
header('Location: team_list.php');
?>
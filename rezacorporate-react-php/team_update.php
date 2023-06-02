<?php
$con=new mysqli('localhost','root','','rezacorp_react');
$id=$_GET['id'];
$photo=$_FILES['photo']['name'];
$name=$_POST['name'];
$position=$_POST['position'];
$detail=$_POST['detail'];
if (move_uploaded_file($_FILES['photo']['tmp_name'],'./assets/team_img/'.$photo)) {
    $query="update team set photo='$photo', name='$name', position='$position', detail='$detail' where id=".$id;    
}else {
    $query="update team set name='$name', position='$position', detail='$detail' where id=".$id;
};

$con->query($query);
header('Location: team_list.php');
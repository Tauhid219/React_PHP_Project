<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");
$db=new mysqli('localhost','root','','rezacorp_react');
$data=json_decode(file_get_contents('php://input'),true);
if(isset($data['name'])){
$name=$data['name'];
$email=$data['email'];
$sub=$data['sub'];
$msg=$data['msg'];
$db->query("INSERT INTO `contact_msg` (`id`, `name`, `email`, `sub`, `msg`) VALUES (NULL, '$name', '$email', '$sub', '$msg')");
echo json_encode(['status'=>true]);
}
?>
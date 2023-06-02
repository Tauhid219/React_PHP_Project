<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

$db = new mysqli('localhost', 'root', '', 'rezacorp_react');
$query = "SELECT * FROM `services`";
$d = $db->query($query);
$data = $d->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);
?>

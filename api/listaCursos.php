<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');

$conn = new mysqli("localhost", "root", "", "faculdade");

$sql = "SELECT * FROM curso";

  mysqli_set_charset($conn,"utf8");
	$result = $conn->query($sql);

	$result_json = array();
	while($row = $result->fetch_assoc()){
		$result_json[] = $row;
	}
	echo json_encode($result_json, JSON_UNESCAPED_UNICODE);
	$conn->close();
?>

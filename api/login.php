<?php
header("Access-Control-Allow-Origin: *");
	header('Content-Type: text/html; charset=utf-8');

	$data = date('d-m-Y');
	$hora = date('H:i:s');

	$conn = new mysqli("localhost", "root", "", "faculdade");

	// if (!isset($_POST["email_user"])){
	// 	exit;
	// }

	$email_user = $_POST["email_user"];
	$senha_user = $_POST["senha_user"];


	$sql_verifica = "SELECT * FROM usuarios WHERE email = '{$email_user}' and senha = '{$senha_user}'";
	//$sql_verifica = "SELECT * FROM usuarios";
	$exec_row = $conn->query($sql_verifica);

	if ($exec_row->num_rows > 0){
			$row = $exec_row->fetch_row();
			$retorno [] = array("mensage" => $row[0], "nome" => $row[1], "email"=>$row[2]);
	} else {
			$retorno [] = array("mensage" => '0');
	}

	echo json_encode($retorno);

	$conn->close();

	;

?>

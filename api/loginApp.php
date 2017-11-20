<?php
//ESTA API ESTÁ UTILIZANDO O BENCO DE DADOS AULA COM A TABELA
//USUÁRIOS E UTILIZA ENVIO E RETORNO EM OBJETOS
header("Access-Control-Allow-Origin:http://localhost:8100");
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    //RECUPERAÇÃO DO FORMULÁRIO
    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    // TRANSFORMA OS DADOS
    $email = $objData->email;
    $senha = $objData->senha;
    // $email = $_POST["email"];
    // $senha = $_POST["senha"];

    // LIMPA OS DADOS
    $email = stripslashes($email);
    $senha = stripslashes($senha);


    $email = trim($email);
    $senha = trim($senha);
    $dados; // RECEBE ARRAY PARA RETORNO

    $conn = new mysqli("localhost", "root", "", "faculdade");

    // INSERE OS DADOS
    $sql_verifica = "SELECT * FROM usuarios WHERE email = '{$email}' and senha = '{$senha}'";
  	//$sql_verifica = "SELECT * FROM usuarios";
  	$exec_row = $conn->query($sql_verifica);

  	if ($exec_row->num_rows > 0){
  			$row = $exec_row->fetch_row();
  			$retorno = array("mensage" => $row[0], "nome" => $row[1], "email"=>$row[2]);
  	} else {
  			$retorno = array("mensage" => '0');
  	}

  	echo json_encode($retorno);

  	$conn->close();

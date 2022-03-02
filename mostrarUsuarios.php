<?php

    $nombre = $_REQUEST['valor'];

// $conexion = new PDO("mysql:host = localhost;dbname=examen","root","");

// $consulta = $conexion -> prepare("SELECT * FROM mensajes");

// $resultado = $consulta -> execute();

// $resultado -> fetchAll(PDO::FETCH_ASSOC);

// $conexion = mysqli_connect("localhost","root","","examen");
// $consulta = "SELECT mensaje FROM mensajes";
// $resultado = mysqli_query($conexion,$consulta);
// $resultado = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

// echo json_encode($resultado);
    echo($nombre);
?>
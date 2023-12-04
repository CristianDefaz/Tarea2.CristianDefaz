<?php
require_once('../Models/cls_computadoras.model.php');
$compu = new Clase_PC;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array(); //defino un arreglo
        $datos = $compu->todos(); //llamo al modelo de usuarios e invoco al procedimiento todos y almaceno en una variable
        while ($fila = mysqli_fetch_assoc($datos)) { //recorro el arreglo de datos
            $todos[] = $fila;
        }
        echo json_encode($todos); //devuelvo el arreglo en formato json
        break;
   /* case "uno":
        $UsuarioId = $_POST["UsuarioId"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $compu->uno($UsuarioId); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        $uno = mysqli_fetch_assoc($datos); //recorro el arreglo de datos
        echo json_encode($uno); //devuelvo el arreglo en formato json
        break;*/

    case 'insertar':
        $marca= $_POST['marca'];
        $procesador= $_POST['procesador']; 
        $espacio= $_POST['espacio']; 
        $ram=$_POST['ram'];   
        $grafica= $_POST['grafica']; 
        $precio= $_POST['precio'];
        $datos = array(); //defino un arreglo
        $datos = $compu->insertar($marca,$procesador,$espacio,$ram,$grafica,$precio); //llamo al modelo de usuarios e invoco al procedimiento insertar
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
    }
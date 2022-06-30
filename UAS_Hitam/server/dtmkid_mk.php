<?php
    $output["error"] = true;
   
    if(isset($_GET["KODE_MK"])){
        $id_mk = $_GET["KODE_MK"];

        include_once("dbkoneksi2.php");
        $sql = "SELECT KODE_MK, NAMA,  SEMESTER FROM matkul WHERE ID_MK='".$id_mk."';";
        $hsl = mysqli_query($cnn, $sql);
        $output["isi"] = mysqli_fetch_all($hsl);
        $output["error"] = false;
    } 
   
    echo json_encode($output);
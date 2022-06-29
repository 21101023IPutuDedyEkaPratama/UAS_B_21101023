<?php
    include_once("dbkoneksi2.php");
    
    $r["sukses"]=false;
    if(isset($_POST["KODE_MK"])){
        $ID_MK=$_POST["KODE_MK"];
        
        $sql = "DELETE FROM matkul WHERE KODE_MK='".$KODE_MK."'";
        
        mysqli_query($cnn, $sql);
        $r["sukses"]= true;
    }
    echo json_encode($r);
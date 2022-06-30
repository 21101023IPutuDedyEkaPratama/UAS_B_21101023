<?php
    include_once("dbkoneksi2.php");

    $r["sukses"]=false;
    if(isset($_POST["KODE_MK"])){
        $KODE_MK=$_POST["KODE_MK"];
        $NAMA=$_POST["NAMA"];
        $SEMESTER=$_POST["SEMESTER"];
       

        $sql = "INSERT INTO matkul(KODE_MK, NAMA, SEMESTER) 
            VALUES('$KODE_MK', '$NAMA', '$SEMESTER');";
        
        mysqli_query($cnn, $sql);
        $r["sukses"]= true;
    }
    echo json_encode($r);
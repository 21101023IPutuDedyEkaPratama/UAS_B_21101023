function storedata(){
    let id_mk= document.getElementById("txid_mk").value;
    let nama = document.getElementById("txnama").value;
    let semester = document.getElementById("txsemester").value;


    let dta = "id_mk="+id_mk+"&nama="+nama+"&semester="+semester;
    const gh = new XMLHttpRequest();
    gh.open("POST","http://localhost/UAS_Hitam/server/dtmkstore.php");
    gh.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    gh.send(dta);

    gh.onload = function(){
        const dta = JSON.parse(this.responseText);
        if(dta["sukses"]){
            document.getElementById("pesan").style.display = "block";
        }
    }

}
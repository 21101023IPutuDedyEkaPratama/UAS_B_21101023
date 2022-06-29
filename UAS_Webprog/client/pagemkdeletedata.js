function deletedata(){
    let id_mk = document.getElementById("txid_mk").value;
    
    let dta = "id_mk="+id_mk;
    const gh = new XMLHttpRequest();
    gh.open("POST","http://localhost/UAS_Hitam/server/dtmkdelete.php");
    gh.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    gh.send(dta);

    gh.onload = function(){
        const dta = JSON.parse(this.responseText);
        if(dta["sukses"]){
            document.getElementById("pesan").style.display = "block";
        }
        setTimeout(()=>{
            window.location.href="http://localhost/UAS_Hitam/client/index.php?p=matkul";
        },5000);
    }

}
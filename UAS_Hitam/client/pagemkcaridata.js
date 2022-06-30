let qs = window.location.search;
let urlP = new URLSearchParams(qs);
let id_mk = urlP.get("id_mk");

let urltarget = new URL("http://localhost/UAS_Hitam/server/dtmkid_mk.php");
urltarget.searchParams.set("id_mk",id_mk);

const gh = new XMLHttpRequest();
gh.open("GET",urltarget);
gh.send();

gh.onload = function(){
    const dta = JSON.parse(this.responseText);
    console.log(dta["isi"]);

   
    for(i=0;i<dta["isi"].length;i++){
        document.getElementById("txid_mk").value = dta["isi"][i][0];
        document.getElementById("txnama").value = dta["isi"][i][1];
        document.getElementById("txsemester").value = dta["isi"][i][2];
      
    }

}
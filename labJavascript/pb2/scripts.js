var daySelect=document.getElementById('daySelect');
var monthSelect=document.getElementById('monthSelect');
var yearSelect=document.getElementById('yearSelect');
function initDay() {
    for (var i=1;i<=31;i++) {
        var opt = document.createElement('option');
        opt.value=i;
        opt.text=i;
        daySelect.appendChild(opt);
    }
}
function initMonth() {
    for (var i=1;i<=12;i++) {
        var opt = document.createElement('option');
        opt.value=i;
        opt.text=i;
        monthSelect.appendChild(opt);
    }
}
function initYear() {
    var d=new Date().getFullYear();
    for (var i=d-99;i<=d;i++) {
        var opt = document.createElement('option');
        opt.value=i;
        opt.text=i;
        yearSelect.appendChild(opt);
    }
    yearSelect.selectedIndex="99";
}


initDay();
initMonth();
initYear();
function validateForm() {
    var err="";
    var userName = document.forms["myForm"]["userName"];
    if (userName.value === "") {
        err+="Numele nu poate fi vid\n";
    }
    var userAge=document.forms["myForm"]["userAge"];
    if(!userAge.checkValidity() || userAge.value==="") {
        err+="Varsta invalida\n";
    }
    var userEmail=document.forms["myForm"]["userEmail"];
    if(!userEmail.checkValidity() || userEmail.value===""){
        err+="Email invalid\n";
    }
    if(err==="")
        err="Datele sunt corecte 😊";
    else
        err+="😢";
    alert(err);

    return !err;
}
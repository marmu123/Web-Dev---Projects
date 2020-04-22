var daySelect=document.getElementById('daySelect');
var monthSelect=document.getElementById('monthSelect');
var yearSelect=document.getElementById('yearSelect');
//initialize
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

//here starts the validation



//#region NAME REGION
function validateUserName(userField) {
    const len=$(userField).val().length;
    var err="";
    if (len<=3 || len>=13) {
        $(userField).addClass("error");
        err+="Nume invalid\n";
    }
    else
        $(userField).removeClass("error");

    return err;
}

$("#userName").keyup(function () {
    validateUserName(this);
});

//#endregion

function validateUserAge(userAge) {
    const val=Number($(userAge).val());
    var err="";
    if(!Number.isInteger(val) || val<=0 || val >=100){
        err+="Varsta trebuie sa fie un intreg intre 1 si 100\n";
        $(userAge).addClass("error");
    }
    else{
        $(userAge).removeClass("error");
    }
    return err;
}

$("#userAge").keyup(function () {
    validateUserAge(this);
});

function validateUserEmail(userEmail) {
    const email=$(userEmail).val();
    const regex=/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/i;
    var err="";
    if(!regex.test(email)){
        $(userEmail).addClass("error");
        err= "Email invalid\n";
    }
    else{
        $(userEmail).removeClass("error");
    }
    return err;

}

$("#userEmail").keyup(function () {
    validateUserEmail(this);
});

function validateForm() {
    var err=validateUserName($("#userName"))+validateUserAge($("#userAge"))+validateUserEmail($("#userEmail"));
    if(err!=="")
        alert(err);
    else
        alert("Datele sunt corecte :)");
    return false;
}
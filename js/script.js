var year = document.getElementsByClassName("year");
var yy = parseInt(year);
var month = document.getElementsByClassName("month");
var mm = parseInt(month);
var date = document.getElementsByClassName("date");
var dd = parseInt(date);
var cc = (yy-1)/100+1;
var result = parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

var femaleAkan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleAkan = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

function validateDate() {
    if(mm <1 || mm >12) {
        alert("Please enter a valid month ; 1 - 12");
    }
    else if(dd < 1 || dd > 31) {
        alert ("Please enter a valid date; 1-31");
    }
}
function output()  {
    if (document.getElementsByClassName("gender")) {
        var gender = "female";
    }
    else{
        var gender = "male";
    }
    if(math.round(result) == 0 && gender === "female") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is " + femaleAkan[0];
    }
    else if (math.round(result) == 1 && gender === "female") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is " + femaleAkan[1];
    }
    else if (math.round(result) == 2 && gender === "female") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is " + femaleAkan[2];
    }
    else if (math.round(result) == 3 && gender === "female") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is " + femaleAkan[3];
    }
    else if (math.round(result) == 4 && gender === "female") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is " + femaleAkan[4];
    }
    else if (math.round(result) == 5 && gender === "female") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is " + femaleAkan[5];
    }
    else if (math.round(result) == 6 && gender === "female") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is "+ femaleAkan[6];
    }
    else if (math.round(result) == 0 && gender === "male") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is " + maleAkan[0];
    }
    else if (math.round(result) == 1 && gender === "male") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is " + maleAkan[1];
    }
    else if (math.round(result) == 2 && gender === "male") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is " + maleAkan[2];
    }
    else if (math.round(result) == 3 && gender === "male") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is "+ maleAkan[3];
    }
    else if (math.round(result) == 4 && gender === "male") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is " + maleAkan[4];
    }
    else if (math.round(result) == 5 && gender === "male") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is "+ maleAkan[5];
    }
    else if (math.round(result) == 6 && gender === "male") {
        document.getElementsByClassName("display").innerHTML = "Your Akan name is  " + maleAkan[6];
    }
    else {
        alert("please enter a date,month and year!!")
    }
}
var femaleAkan = [" Akosua"," Adwoa"," Abenaa"," Akua"," Yaa"," Afua"," Ama"];
var maleAkan = [" Kwasi"," Kwadwo"," Kwabena"," Kwaku"," Yaw"," Kofi"," Kwame"];

function output() {

var mm = parseInt(document.getElementById("month").value);
var dd = parseInt(document.getElementById("date").value);
var gender = document.getElementById("gender").value;
var yy = parseInt(document.getElementById("year").value);
var cc = parseInt(document.getElementById("century").value);
var day =(parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7)

if(cc <= 0 || cc === " "){
    alert("Enter the century you were born")
} else
if(yy>2020 || yy <= 0 || yy == " ") {
    alert("Enter a valid year")
}else 
if (mm <= 0 || mm > 12 || mm == " ") {
    alert("Enter valid month")
}else 
if (dd < 1 || dd > 31 || dd == " ") {
    alert("Enter valid date")
}
else if (gender === "female") {
        document.getElementById("display").innerHTML = ("Your Akan name is  " + femaleAkan[day])
} 
else if (gender === "male") {
        document.getElementById("display").innerHTML = ("Your Akan name is  " + maleAkan[day])
    }
}


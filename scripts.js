var femaleAkan = [" Akosua"," Adwoa"," Abenaa"," Akua"," Yaa"," Afua"," Ama"];
var maleAkan = [" Kwasi"," Kwadwo"," Kwabena"," Kwaku"," Yaw"," Kofi"," Kwame"];

function output() {

var mm = parseInt(document.getElementById("month").value);
var dd = parseInt(document.getElementById("date").value);
var gender = document.getElementById("gender").value;
var yy = parseInt(document.getElementById("year").value);
var cc = parseInt(document.getElementById("century").value);
var day =(parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7)

if(year <= 0 || year == " ") {
    document.getElementById("display").innerHTML = ("Enter a valid year")
}
else if (mm <= 0 || mm > 12 || mm == " ") {
    document.getElementById("display").innerHTML = ("Enter valid month")
}
else if (dd < 1 || dd > 31 || dd == " ") {
    document.getElementById ("display").innerHTML = ("Enter valid date")
}
else if (gender === "female") {
        document.getElementById("display").innerHTML = ("Your Akan name is  " + femaleAkan[day])
} 
else if (gender === "male") {
        document.getElementById("display").innerHTML = ("Your Akan name is  " + maleAkan[day])
    }
}


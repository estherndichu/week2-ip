var femaleAkan = [" Akosua"," Adwoa"," Abenaa"," Akua"," Yaa"," Afua"," Ama"];
var maleAkan = [" Kwasi"," Kwadwo"," Kwabena"," Kwaku"," Yaw"," Kofi"," Kwame"];
function output() {

var year = document.getElementById("year").value;
var mm = parseInt(document.getElementById("month").value);

var day = parseInt(document.getElementById("day").value);

var gender = document.getElementById("gender").value;
var yy = parseInt(year.substr(2, 4));


    var century = parseInt(year.substr(0, 2));
var date = Math.abs(parseInt(((century / 4) - 2 * century - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + day) % 7)

if(year <= 0 || year == " " || year > 2020) {
            alert("enter a valid year")}
            else
    if (mm <= 0 || mm > 12) {
        alert("enter valid month")
    } else
    if (day < 1 || day > 31) {
        alert("enter valid date")

    }

    if (gender === "male") {
        alert("your Akan male name is" + maleAkan[date])
    } else
    if (gender === "female") {
        alert("your Akan female name is"  + femaleAkan[date])
    }
}


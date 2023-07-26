var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconed = document.getElementById("seconed");
var weight = document.getElementById("clock_weight");
var w = 45;
function tt(){
    var today = new Date();
    var hh = today.getHours()%12*30;
    var mm = today.getMinutes()*6;
    var ss = today.getSeconds()*6;
    w*=-1;
    hour.style.transform = "rotate("+hh+"deg)";
    minute.style.transform = "rotate("+mm+"deg)";
    second.style.transform = "rotate("+ss+"deg)";
    weight.style.transform = "rotate("+w+"deg)";
}
tt();
var intv = setInterval(function(){tt();}, 1000);
var countDownDate = new Date("May 31, 2024 00:00:00").getTime();

countdown();
var x = setInterval(function() {
    countdown();
}, 1000);

function countdown(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";
    document.getElementById("seconds").innerHTML = seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "0d";
        document.getElementById("hours").innerHTML = "0h";
        document.getElementById("minutes").innerHTML = "0m";
        document.getElementById("seconds").innerHTML = "0s";
    }
}

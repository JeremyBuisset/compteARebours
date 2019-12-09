var timeout;
var temps;
var stockClass;
var span;
var countDisplay = document.getElementById("countDisplay");
var nameCount;
var timer;


function Countdown (originalTime, time){
    this.originalTime = 20;
    this.time = 20;
    this.reset = function () {
        time = originalTime;
        document.getElementById("countDisplay").innerHTML = time
    };
    this.launch = function () {
        var countUp = function() {
            {
                time --;
                timeout = setTimeout(countUp, 1000);
                console.log(time);
                document.getElementById("countDisplay").innerHTML = time
            }
        };
        countUp();
    };
    this.stop = function () {
        clearTimeout(timeout);
    };
    this.create = function () {

    }

}
countdownBase = new Countdown(40, 40);

document.getElementById("reset").addEventListener("click", function () {
    countdownBase.reset ();
});

document.getElementById("launch").addEventListener("click", function () {
    countdownBase.launch ();
});

document.getElementById("stop").addEventListener("click", function () {
    countdownBase.stop ();
});




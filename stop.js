function allSet () {
    let date = new Date ();
    document.getElementById ("date").innerText = date.toDateString();
}
allSet ();

let display = document.getElementById ("display");
let startBtn = document.getElementById ("start");
let stopBtn = document.getElementById ("stop");
let resetBtn = document.getElementById ("reset");

let timer = null;
let houre = 0;
let min = 0;
let sec = 0;
let milli = 0;


function startTimer() {
    milli++;
    if (milli == 100) {
        milli = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                houre++;
            }
        } 
    }
    let hr = houre < 10 ? "0" + houre : houre;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let mil = milli < 10 ? "0" + milli : milli;
    display.textContent = `${hr} : ${m} : ${s} : ${mil}`;
}

startBtn.addEventListener ("click", function() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(startTimer, 10);
});

stopBtn.addEventListener ("click", function() {
    clearInterval(timer);
});

resetBtn.addEventListener ("click", function() {
    clearInterval(timer);
    display.textContent = `00:00:00:00`;  
});

    


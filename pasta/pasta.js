const button=document.querySelector("#myButton");
button.addEventListener("click", function(){
    document.querySelector("#player").play();
    document.querySelector("#myVideo").play()
})

const timer= 11;
let amountTime= timer*60;

function calculateTime (){
    const countdown=document.querySelector("#countdown")
    let minutes=Math.floor(amountTime/60);
    let seconds= amountTime%60;

    if (seconds < 10){
        seconds= "0" + seconds;
    }

    countdown.textContent =`${minutes} : ${seconds}`;
    amountTime--;
    console.log(amountTime)

     if (amountTime <0) {
        stopTimer();
        amountTime=0;
    }

    function stopTimer(){
       clearInterval(timerId);
        document.querySelector("#player").pause();
    }
}

let timerId= setInterval(calculateTime,1000)
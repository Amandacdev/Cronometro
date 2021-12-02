var seconds = 0
var tens = 0
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var run

var start = document.getElementById ("button-start")
start.onclick = function () {
 run = setInterval (time, 10);
}

function time () {
 tens ++
  
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
    } 
    
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + tens;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
}

var stop = document.getElementById ("button-stop")
stop.onclick = function () {
  clearInterval(run)
}

var reset = document.getElementById ("button-reset")
reset.onclick = function () {
  seconds = 00
  tens =  00
  appendSeconds.innerHTML = 00
  appendTens.innerHTML = 00
  
}
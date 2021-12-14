var timedown;


var currTime = 55;

function activate() {   
  countDown();
  noise();
}
/*my start timer and noise button*/

function countDown() {
  timedown = setInterval(function() {
    currTime = currTime - 1;
    document.getElementById("countdowntimer").innerHTML = "The time is:" + currTime;
    if (currTime == 0) {
      clearInterval(timedown);
      document.getElementById("countdowntimer").innerHTML = "BLASTOFF!";}
       else if (currTime <= 25) {
      document.getElementById("countdowntimer").innerHTML = "Half way to launch " + currTime;

    }
  }, 1000);
}
/*countdown timer*/
function stopCount() {
  clearInterval(timedown)
;
document.getElementById("sound").pause();
};
/* stop sound and timer*/
function noise(){
document.getElementById("sound").play();
}


/*play the sound*/
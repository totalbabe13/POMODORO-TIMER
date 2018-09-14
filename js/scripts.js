

let defaultMinuteTimer = 25;
// let defaultBreakTimer  = [5];
let jsTimer = 0;
let seconds = 60;
let secondsTimer = '00';

// - - - - - - - - - - - - - - - - - - - - - - -
//DEFAULT TIMER SETTINGS
let activeTimerCounter = document.querySelector('#actualTimer')
activeTimerCounter.textContent = `${defaultMinuteTimer}:${secondsTimer}`

// - - - - - - - - - - - - - - - - - - - - - - -
//DEFAULT SETTING FOR SESSION -->25
let sessionMinutesSetter = document.querySelector('#minuteSetter')
sessionMinutesSetter.textContent = defaultMinuteTimer ;
// - - - - - - - - - - - - - - - - - - - - - - -
// SESSION BUTTONS -->ADD/ SUBTRACT

//SUB button
let subMinuteButton = document.querySelector('#subMinuteSet').addEventListener("click", subOneMinuteToSession);
function subOneMinuteToSession() {
	defaultMinuteTimer -= 1;
	sessionMinutesSetter.textContent = defaultMinuteTimer;
	console.log(defaultMinuteTimer)
};

//ADD button
addMinuteButton = document.querySelector('#addMinuteSet').addEventListener("click", addOneMinuteToSession);
function addOneMinuteToSession() {
	defaultMinuteTimer += 1;
	sessionMinutesSetter.textContent = defaultMinuteTimer;
	console.log(defaultMinuteTimer)
}
// - - - - - - - - - - - - - - - - - - - - - - -
//START BUTTON --> run timer!
let startButton = document.querySelector('#pushPlay')
startButton.addEventListener("click",startTimer)

function startTimer() {
	convertMinutesToJStime(defaultMinuteTimer);
	timerDisplay();
	
	let intervalID = window.setInterval(myCallback, 100);
    function myCallback() {
    	if (jsTimer < 1){
    		clearInterval(nIntervId);
        }

  
        jsTimer -= 1;
        seconds -= 1;
        timerDisplay(jsTimer);  
};

	// console.log(seconds)


}

// - - - - - - - - - - - - - - - - - - - - - - -



// let jsTimer = 0;
// let inputTimefromUser = 2;
// let minDisplay = 0;
// let seconds = 60;
// let secondsTimer;

// //convert mintues from user into a JS format
// // NOTE** --> counts down in seconds (1000 = 1 second)
function convertMinutesToJStime(UserMinutes) {
  jsTimer = UserMinutes * 60
};


// // COUNTDOWN mechanism
// // 1. Convert USER input into JS timer
// convertMinutesToJStime(inputTimefromUser);

// //CONVERT SECONDS to display: 9sec --> 09 (11:09)
function convertSeconds(currentSeconds){
  if(currentSeconds < 1){
      seconds = 60;
  } else if(currentSeconds < 10){
      secondsTimer = '0'+ currentSeconds;
  } else {
      secondsTimer = currentSeconds
  }
};

// // 2.Ceate the timer diplay [04:36]/ from the USERS input
function timerDisplay(jsTimer) {     
   let displayMinutes = (Math.floor(jsTimer/60));
   convertSeconds(seconds);
   activeTimerCounter.textContent = `${displayMinutes}:${secondsTimer}`;
   //console.log(`${displayMinutes}:${secondsTimer}`)
};


// // 3.Let the countdown change display
// var intervalID = window.setInterval(myCallback, 100);
// function myCallback() {
//   if (jsTimer < 1){
//     clearInterval(nIntervId);
//   } 
//   jsTimer -= 1;
//   seconds -= 1;
//   timerDisplay(jsTimer)
  
// };




let subMinute = document.querySelector('#subMinute').addEventListener("click", subMintueSetter);
let addMinute = document.querySelector('#addMinute').addEventListener("click", addingMinute);
let minuteSetterDisplay = document.querySelector('#minutes')

let subMinuteBreak = document.querySelector("#subMinuteBreak").addEventListener('click',subtractMinuteBreak);
let addMinuteBreak = document.querySelector("#addMinuteBreak").addEventListener('click',addingMinuteBreak);
let minuteSetterDisplayBreak = document.querySelector('#minutesBreak')

let actualTime = document.querySelector('#actualTimer')

let isTimerOn = false
let startBUtton = document.querySelector('#pushPlay1').addEventListener("click",startTimer);

let seesionTimeSetter = [25];
let breakTimerSetter = [5];
actualTime.textContent = seesionTimeSetter[0];

minuteSetterDisplay.textContent = seesionTimeSetter;
minuteSetterDisplayBreak.textContent = breakTimerSetter;

function startTimer() {
	
	let intervalID = window.setInterval(function(){
		subtractMinute();
		if(seesionTimeSetter[0] === 0) {
	  		clearInterval(intervalID);
	  }
	},1000);
}

function subMintueSetter () {
	let newTime = seesionTimeSetter[0] -= 1;
	minuteSetterDisplay.textContent = newTime;
	actualTime.textContent = newTime;
}



function subtractMinute() {
	let newTime = seesionTimeSetter[0] -= 1;
	actualTime.textContent = newTime;
    //minuteSetterDisplay.textContent = newTime;
	console.log(seesionTimeSetter)

	} 


function addingMinute() {
	let newTime = seesionTimeSetter[0] += 1;
    minuteSetterDisplay.textContent = newTime;
	console.log(seesionTimeSetter)
}

function subtractMinuteBreak() {
	let newTime = breakTimerSetter[0] -= 1;
    minuteSetterDisplayBreak.textContent = newTime;
	console.log(breakTimerSetter)
}

function addingMinuteBreak() {
	let newTime = breakTimerSetter[0] += 1;
    minuteSetterDisplayBreak.textContent = newTime;
	console.log(breakTimerSetter)

}



// let jsTimer = 0;
// let inputTimefromUser = 2;
// let minDisplay = 0;
// let seconds = 60;
// let secondsTimer;

// //convert mintues from user into a JS format
// // NOTE** --> counts down in seconds (1000 = 1 second)
// function convertMinutesToJStime(UserMinutes) {
//   jsTimer = UserMinutes * 60
// };


// // COUNTDOWN mechanism
// // 1. Convert USER input into JS timer
// convertMinutesToJStime(inputTimefromUser);

// //CONVERT SECONDS to display: 9sec --> 09 (11:09)
// function convertSeconds(currentSeconds){
//   // let secondsTimer;
//   if(currentSeconds < 1){
//       seconds = 60;
//   } else if(currentSeconds < 10){
//       secondsTimer = '0'+ currentSeconds;
//   } else {
//       secondsTimer = currentSeconds
//   }
// };

// // 2.Ceate the timer diplay [04:36]/ from the USERS input
// function timerDisplay(secsJS) {     
//    let displayMinutes = (Math.floor(jsTimer/60));
//    convertSeconds(seconds);
//    console.log(`${displayMinutes}:${secondsTimer}`)
// };


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
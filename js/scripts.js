

let defaultMinuteTimer = 25;
let defaultBreakTimer  = 5;
let jsTimer = 0;
let jsBreakTimer = 0;
let seconds = 59;
let secondsTimer = '00';
let pausing = false;
let breakActive = 0;

// - - - - - - - - - - - - - - - - - - - - - - -
//DEFAULT TIMER SETTINGS
let activeTimerCounter = document.querySelector('#actualTimer');
activeTimerCounter.textContent = `${defaultMinuteTimer}:${secondsTimer}`;

// - - - - - - - - - - - - - - - - - - - - - - -
//DEFAULT SETTING FOR SESSION  and BREAK -->25 / 5
let sessionMinutesSetter = document.querySelector('#minuteSetter');
sessionMinutesSetter.textContent = defaultMinuteTimer;
let breakMintuesSetter = document.querySelector('#minutesBreak');
breakMintuesSetter.textContent = defaultBreakTimer
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
// BREAK BUTTONS -->ADD/ SUBTRACT

//SUBTRACT BUTTON 
let subMinuteBreakButton = document.querySelector('#subMinuteBreak').addEventListener("click", subOneMinuteToBreak);
function subOneMinuteToBreak() {
	defaultBreakTimer -= 1;
	breakMintuesSetter.textContent = defaultBreakTimer;
	console.log(defaultMinuteTimer)
};

let addMinuteBreakButton = document.querySelector('#addMinuteBreak').addEventListener("click", addOneMinuteToBreak);
function addOneMinuteToBreak() {
	defaultBreakTimer += 1;
	breakMintuesSetter.textContent = defaultBreakTimer;
	console.log(defaultMinuteTimer)
}

// - - - - - - - - - - - - - - - - - - - - - - -
//START BUTTON --> run timer!
let intervalID;
let startButton = document.querySelector('#pushPlay')
startButton.addEventListener("click",startTimer)

function startTimer() {
	convertMinutesToJStime(defaultMinuteTimer);
	timerDisplay(jsTimer);
	pausing = false
	
	let intervalID = setInterval(runTimer, 100);
    function runTimer() {
    	jsTimer -= 1;
        seconds -= 1;
        timerDisplay(jsTimer);
        console.log(`jsTimer during session: ${jsTimer}`)

        if(jsTimer < 1 ) {
        	breakActive += 1;
           convertMinutesToJStime(defaultBreakTimer);
    	   timerDisplay(jsTimer);
    	   jsTimer -= 1;
           seconds -= 1;
           console.log(`first if statment and the js timer: ${jsTimer}`)
    	   
    	     if (jsTimer < 1 ){
    	     	console.log('second if statment')
    			return activeTimerCounter.textContent = `00:00`;
    			clearInterval(intervalID);    		       
             }
      } else if(pausing === true) {
          	clearInterval(intervalID);
        };
    }
};

// - - - - - - - - - - - - - - - - - - - - - - -
//HELPER FUNCTIONS --> !

// // NOTE** --> counts down in seconds (1000 = 1 second)
function convertMinutesToJStime(UserMinutes) {
  jsTimer = Number(UserMinutes) * 60
};

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
   // console.log(`${displayMinutes}:${secondsTimer}`)
};

// - - - - - - - - - - - - - - - - - - - - - - -
//PAUSE BUTTON --> pause timer!
let pauseButton = document.querySelector('#pushPause')
pauseButton.addEventListener("click",pauseTimer)

function pauseTimer() {
	pausing = true
	// console.log(pausing)
};


// - - - - - - - - - - - - - - - - - - - - - - -
//STOP BUTTON --> stop timer!
let stopButton = document.querySelector('#pushStop')
stopButton.addEventListener("click",stopTimer)

function stopTimer() {
	defaultMinuteTimer = 25;
    jsTimer = 0;
    seconds = 0;
    secondsTimer = '00';
    pausing = true;
    
    convertMinutesToJStime(defaultMinuteTimer)
    timerDisplay(jsTimer);
};
// - - - - - - - - - - - - - - - - - - - - - - -


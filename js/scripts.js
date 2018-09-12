



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
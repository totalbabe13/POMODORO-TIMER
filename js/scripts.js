



let subMinute = document.querySelector('#subMinute').addEventListener("click", subtractMinute);
let addMinute = document.querySelector('#addMinute').addEventListener("click", addingMinute);
let minuteSetterDisplay = document.querySelector('#minutes')

let subMinuteBreak = document.querySelector("#subMinuteBreak").addEventListener('click',subtractMinuteBreak);
let addMinuteBreak = document.querySelector("#addMinuteBreak").addEventListener('click',addingMinuteBreak);
let minuteSetterDisplayBreak = document.querySelector('#minutesBreak')

let seesionTimeSetter = [25];
let breakTimerSetter = [5];

minuteSetterDisplay.textContent = seesionTimeSetter;
minuteSetterDisplayBreak.textContent = breakTimerSetter;






function subtractMinute() {
	let newTime = seesionTimeSetter[0] -= 1;
    minuteSetterDisplay.textContent = newTime;
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
var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
  // executed at the interval set by setInterval
  var now = new Date();
  var seconds = now.getSeconds();
  var mins = now.getMinutes();
  var hours = now.getHours();
  
  var secondsDegree = (360 / 60 * seconds) + 90;  // add 90deg to offset the initial css rotate transform
  var minsDegree = (360 / 60 * mins) + 90;
  var hoursDegree = (360 / 12 * hours) + 90;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minsDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  console.log(seconds);
  console.log(secondsDegree)
}

setInterval(setDate, 1000);
const digitalClock = document.querySelector("#digitalClock"),
  selectMenu = document.querySelectorAll("select"),
  setAlarmBtn = document.querySelector("button");

let alarmTime,
  isAlarmSet,
  ringtone = new Audio("./assets/ringtone.mp3");

for (let i = 12; i > 0; i--) {
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].insertAdjacentHTML("beforeend", option);
}
for (let i = 0; i < 60; i++) {
  let option = `<option value="${i < 10 ? "0" + i : i}">${i}</option>`;
  selectMenu[1].insertAdjacentHTML("beforeend", option);
}
["AM", "PM"].forEach((ampm) => {
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].insertAdjacentHTML("beforeend", option);
});

setInterval(() => {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = h >= 12 ? "PM" : "AM";

  h = h % 12 || 12;
  digitalClock.innerText = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${
    s < 10 ? "0" + s : s
  } ${ampm}`;

  if (alarmTime === `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    setAlarmBtn.innerText = "Set Alarm";
    return (isAlarmSet = false);
  }
  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert("Please select a valid time to set Alarm!");
  }
  alarmTime = time;
  isAlarmSet = true;
  setAlarmBtn.innerText = "Clear Alarm";
}
setAlarmBtn.addEventListener("click", setAlarm);

// Analog Clock Functionality
const canvas = document.getElementById("analogClock");
const ctx = canvas.getContext("2d");
const radius = canvas.width / 2;
ctx.translate(radius, radius);

function drawClock() {
  ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
  drawFace();
  drawNumbers();
  drawTime();
}

function drawFace() {
  ctx.beginPath();
  ctx.arc(0, 0, radius - 5, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.stroke();
}

function drawNumbers() {
  ctx.font = "16px Poppins";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let num = 1; num <= 12; num++) {
    let angle = (num * Math.PI) / 6;
    let x = Math.cos(angle) * (radius - 20);
    let y = Math.sin(angle) * (radius - 20);
    ctx.fillText(num, x, y);
  }
}

function drawTime() {
  const now = new Date();
  let hours = now.getHours() % 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  drawHand((hours + minutes / 60) * 30, radius * 0.5, 6);
  drawHand(minutes * 6, radius * 0.75, 4);
  ctx.strokeStyle = "red";
  drawHand(seconds * 6, radius * 0.85, 2);
  ctx.strokeStyle = "black";
}

function drawHand(angle, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.moveTo(0, 0);
  ctx.rotate(angle * (Math.PI / 180));
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-angle * (Math.PI / 180));
}

setInterval(drawClock, 1000);
drawClock();

let timerDisplay = document.querySelector(".timerDisplay");
let buttons = document.querySelector(".buttons");

let minute = 0;
let second = 0;
let miliSecond = 0;
let timer=null;

let start = () => {
  timer = setInterval(() => {
    miliSecond++;
    if (miliSecond === 60) {
      miliSecond = 0;
      second++;
    }

    if (second === 60) {
      second = 0;
      minute++;
    }

    // Add leading zeros for nice format (e.g. 01:05:09)
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = miliSecond < 10 ? "0" + miliSecond : miliSecond;

    timerDisplay.innerHTML = `${m}:${s}:${ms}`;
  }, 10);
};

buttons.addEventListener("click", (event) => {
  if (event.target.id === "start") {
    start();
  } else if (event.target.id === "stop") {
    clearInterval(timer);
    timer = null;
  } else if (event.target.id === "Reset") {
    clearInterval(timer);
    timer = null;
    minute = 0;
    second = 0;
    miliSecond = 0;
    timerDisplay.innerHTML = "00:00:00";
  }
});

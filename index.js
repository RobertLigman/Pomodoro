const btn = document.querySelector(".btn");
const clock = document.querySelector(".clock");
const body = document.querySelector("body");
const subtitle = document.querySelector(".subtitle");
const setBackground = (color) => {
  body.style.backgroundColor = color;
};

const stopCounting = (timer) => {
  clock.textContent = "Stopped";
  btn.removeEventListener("click", stopCounting);
  btn.addEventListener("click", startCounting);
  btn.textContent = "start";
  clearInterval(timer);
};

const startCounting = () => {
  let isLearnPhaseDone = false;
  btn.removeEventListener("click", startCounting);
  let time = 1500;
  const timer = setInterval(() => {
    time--;
    subtitle.textContent = "Nauka";

    if (time == 0 && !isLearnPhaseDone) {
      isLearnPhaseDone = true;
      time = 300;
      setBackground("red");
    } else if (time !== 0) setBackground("lightblue");

    if (isLearnPhaseDone) {
      subtitle.textContent = "Przerwa";
      if (time == 0) stopCounting(timer);
    }
    clock.textContent = Math.floor(time / 60) + ":" + (time % 60);
  }, 1000);
  btn.addEventListener("click", () => stopCounting(timer));
  btn.textContent = "stop";
};

btn.addEventListener("click", startCounting);

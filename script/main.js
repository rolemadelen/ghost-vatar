let eye = 1;
let mouth = 1;
let head = 1;
let hand = 1;

const EYE_MAX = 6;
const MOUTH_MAX = 11;
const HEAD_MAX = 6;
const HAND_MAX = 9;

function switchPrevHead() {
  const headImg = document.querySelector(".ghost-head__img");
  head -= 1;
  if (head <= 0) head = HEAD_MAX;
  headImg.src = `./assets/head/ghost-head${head}.png`;

  let eyeDiv = document.querySelector(".ghost-eye");
  if (head != 1) {
    eyeDiv.style.opacity = 0.3;
  } else {
    eyeDiv.style.opacity = 1.0;
  }
}

function switchNextHead() {
  const headImg = document.querySelector(".ghost-head__img");
  head += 1;
  if (head > HEAD_MAX) head = 1;
  headImg.src = `./assets/head/ghost-head${head}.png`;

  let eyeDiv = document.querySelector(".ghost-eye");
  if (head != 1) {
    eyeDiv.style.opacity = 0.3;
  } else {
    eyeDiv.style.opacity = 1.0;
  }
}

function switchPrevEye() {
  const eyeImg = document.querySelector(".ghost-eye__img");
  eye -= 1;
  if (eye <= 0) eye = EYE_MAX;
  eyeImg.src = `./assets/eyes/ghost-eye${eye}.png`;
}

function switchNextEye() {
  const eyeImg = document.querySelector(".ghost-eye__img");
  eye += 1;
  if (eye > EYE_MAX) eye = 1;
  eyeImg.src = `./assets/eyes/ghost-eye${eye}.png`;
}

function switchPrevMouth() {
  const mouthImg = document.querySelector(".ghost-mouth__img");
  mouth -= 1;
  if (mouth <= 0) mouth = MOUTH_MAX;
  mouthImg.src = `./assets/mouth/ghost-mouth${mouth}.png`;
}

function switchNextMouth() {
  const mouthImg = document.querySelector(".ghost-mouth__img");

  mouth += 1;
  if (mouth > MOUTH_MAX) mouth = 1;
  mouthImg.src = `./assets/mouth/ghost-mouth${mouth}.png`;
}

function switchPrevHand() {
  const handImg = document.querySelector(".ghost-hand__img");
  hand -= 1;
  if (hand <= 0) hand = HAND_MAX;
  handImg.src = `./assets/hand/ghost-hand${hand}.png`;
}

function switchNextHand() {
  const handImg = document.querySelector(".ghost-hand__img");
  hand += 1;
  if (hand > HAND_MAX) hand = 1;
  handImg.src = `./assets/hand/ghost-hand${hand}.png`;
}

function saveImage() {
  html2canvas(document.querySelector(".preview"),{scale:4}).then(
    (canvas) => {
      let canvasUrl = canvas.toDataURL();
      // Create an anchor, and set the href value to our data URL
      const createEl = document.createElement("a");
      createEl.href = canvasUrl;

      // This is the name of our downloaded file
      createEl.download = "ghostvatar";

      // Click the download button, causing a download, and then remove it
      createEl.click();
      createEl.remove();
    }
  );
}

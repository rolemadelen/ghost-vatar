let isHeadOn = false;

function saveImage() {
  html2canvas(document.querySelector(".preview"), { scale: 4 }).then(
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

function changeHead(n) {
  const headImg = document.querySelector(".ghost-head__img");
  headImg.src = `./assets/head/ghost-head${n}.png`;
  isHeadOn = n != 1;

  let eyeImg = document.querySelector(".ghost-eye__img");
  if(isHeadOn == true && (n < 5)) {
    eyeImg.style.opacity = 0.5;
  } else {
    eyeImg.style.opacity = 1.0;
  }
}

function changeBody(n) {
  const bodyImg = document.querySelector(".ghost-body__img");
  bodyImg.src = `./assets/body/ghost-body${n}.png`;
}

function changeEffect(n) {
  const effectImg = document.querySelector(".ghost-effect__img");
  effectImg.src = `./assets/effect/ghost-effect${n}.png`;
}

function changeEye(n) {
  const eyeImg = document.querySelector(".ghost-eye__img");
  eyeImg.src = `./assets/eyes/ghost-eye${n}.png`;
}

function changeMouth(n) {
  const mouthImg = document.querySelector(".ghost-mouth__img");
  mouthImg.src = `./assets/mouth/ghost-mouth${n}.png`;
}

function changeHand(n) {
  const handImg = document.querySelector(".ghost-hand__img");
  handImg.src = `./assets/hand/ghost-hand${n}.png`;
}

function changeBubble(n) {
  const bubbleImg = document.querySelector(".ghost-bubble__img");
  bubbleImg.src = `./assets/bubble/bubble${n}.png`;
}

window.onload = function () {
  const closetBody = document.querySelector(".closet-body");
  const closetEffect = document.querySelector(".closet-effect");
  const closetHead = document.querySelector(".closet-head");
  const closetEye = document.querySelector(".closet-eye");
  const closetMouth = document.querySelector(".closet-mouth");
  const closetHand = document.querySelector(".closet-hand");
  const closetBubble = document.querySelector(".closet-bubble");

  for (let i = 0; i < closetBody.children.length; i += 1) {
    closetBody.children[i].addEventListener("click", () => changeBody(i + 1));
  }

  for (let i = 0; i < closetEffect.children.length; i += 1) {
    closetEffect.children[i].addEventListener("click", () => changeEffect(i + 1));
  }

  for (let i = 0; i < closetHead.children.length; i += 1) {
    closetHead.children[i].addEventListener("click", () => changeHead(i + 1));
  }

  for (let i = 0; i < closetEye.children.length; i += 1) {
    closetEye.children[i].addEventListener("click", () => changeEye(i + 1));
  }

  for (let i = 0; i < closetMouth.children.length; i += 1) {
    closetMouth.children[i].addEventListener("click", () => changeMouth(i + 1));
  }

  for (let i = 0; i < closetHand.children.length; i += 1) {
    closetHand.children[i].addEventListener("click", () => changeHand(i + 1));
  }

  for (let i = 0; i < closetBubble.children.length; i += 1) {
    closetBubble.children[i].addEventListener("click", () =>
      changeBubble(i + 1)
    );
  }
};

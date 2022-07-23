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

function toggleActive(imgActive, currImgName, fileName, closetActive, closet) {
  if(closetActive) closetActive.classList.remove("active");

  if(currImgName === fileName) {
    imgActive.classList.toggle("active");
    if(closetActive) closetActive.classList.remove("active");
    else closet.classList.add("active");
  } else {
    imgActive.classList.add("active");
    closet.classList.add("active");
    imgActive.src = fileName;
  }
}

function changeHead(n) {
  const headImgActive = document.querySelector(".ghost-head__img");
  const fileName = `./assets/head/ghost-head${n}.png`;
  const currentFile = `.${headImgActive.src.substr(headImgActive.src.indexOf("/assets"))}`;
  const closetHeadActive = document.querySelector(".closet-head li.active");
  const closetHead = document.querySelectorAll(".closet-head li");
  toggleActive(headImgActive, currentFile, fileName, closetHeadActive, closetHead[n-1]);
}

function changeBody(n) {
  const bodyImgActive = document.querySelector(".ghost-body__img");
  bodyImgActive.src = `./assets/body/ghost-body${n}.png`;
  const closetBodyActive = document.querySelector(".closet-body li.active");
  const closetBody = document.querySelectorAll(".closet-body li");
  if(closetBodyActive) closetBodyActive.classList.remove("active");
  closetBody[n-1].classList.add("active");
}

function changeEffect(n) {
  const effectImgActive = document.querySelector(".ghost-effect__img");
  const fileName = `./assets/effect/ghost-effect${n}.png`;
  const currentFile = `.${effectImgActive.src.substr(effectImgActive.src.indexOf("/assets"))}`;
  const closetEffectActive = document.querySelector(".closet-effect li.active");
  const closetEffect = document.querySelectorAll(".closet-effect li");
  toggleActive(effectImgActive, currentFile, fileName, closetEffectActive, closetEffect[n-1]);
}

function changeEye(n) {
  const eyeImgActive = document.querySelector(".ghost-eye__img");
  eyeImgActive.src = `./assets/eyes/ghost-eye${n}.png`;
  const closetEyeActive = document.querySelector(".closet-eye li.active");
  const closetEye = document.querySelectorAll(".closet-eye li");
  if(closetEyeActive) closetEyeActive.classList.remove("active");
  closetEye[n-1].classList.add("active");
}

function changeMouth(n) {
  const mouthImgActive = document.querySelector(".ghost-mouth__img");
  mouthImgActive.src = `./assets/mouth/ghost-mouth${n}.png`;
  const closetMouthActive = document.querySelector(".closet-mouth li.active");
  const closetMouth = document.querySelectorAll(".closet-mouth li");
  if(closetMouthActive) closetMouthActive.classList.remove("active");
  closetMouth[n-1].classList.add("active");
}

function changeHand(n) {
  const handImgActive = document.querySelector(".ghost-hand__img");
  handImgActive.src = `./assets/hand/ghost-hand${n}.png`;
  const closetHandActive = document.querySelector(".closet-hand li.active");
  const closetHand = document.querySelectorAll(".closet-hand li");
  if(closetHandActive) closetHandActive.classList.remove("active");
  closetHand[n-1].classList.add("active");
}

function changeBubble(n) {
  const bubbleImgActive = document.querySelector(".ghost-bubble__img");
  const fileName = `./assets/bubble/bubble${n}.png`;
  const currentFile = `.${bubbleImgActive.src.substr(bubbleImgActive.src.indexOf("/assets"))}`;
  const closetBubbleActive = document.querySelector(".closet-bubble li.active");
  const closetBubble = document.querySelectorAll(".closet-bubble li");
  toggleActive(bubbleImgActive, currentFile, fileName, closetBubbleActive, closetBubble[n-1]);
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
    closetEffect.children[i].addEventListener("click", () =>
      changeEffect(i + 1)
    );
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

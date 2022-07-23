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
  const headImgActive = document.querySelector(".ghost-head .active");
  headImgActive.classList.remove("active");
  const headImgs = document.querySelectorAll(".ghost-head img");
  headImgs[n-1].classList.add("active");
  isHeadOn = n != 1;

  let eyeImg = document.querySelector(".ghost-eye__img");
  if(isHeadOn && (n < 5)) {
    eyeImg.style.opacity = 0.5;
  } else {
    eyeImg.style.opacity = 1.0;
  }
}

function changeBody(n) {
  const bodyImgActive = document.querySelector(".ghost-body .active");
  bodyImgActive.classList.remove("active");
  const bodyImgs = document.querySelectorAll(".ghost-body img");
  bodyImgs[n-1].classList.add("active");
}

function changeEffect(n) {
  const effectImgActive = document.querySelector(".ghost-effect .active");
  effectImgActive.classList.remove("active");
  const effectImgs = document.querySelectorAll(".ghost-effect img");
  effectImgs[n-1].classList.add("active");
}

function changeEye(n) {
  const eyeImgActive = document.querySelector(".ghost-eye .active");
  eyeImgActive.classList.remove("active");
  const eyeImgs = document.querySelectorAll(".ghost-eye img");
  eyeImgs[n-1].classList.add("active");
}

function changeMouth(n) {
  const mouthImgActive = document.querySelector(".ghost-mouth .active");
  mouthImgActive.classList.remove("active");
  const mouthImgs = document.querySelectorAll(".ghost-mouth img");
  mouthImgs[n-1].classList.add("active");
}

function changeHand(n) {
  const handImgActive = document.querySelector(".ghost-hand .active");
  handImgActive.classList.remove("active");
  const handImgs = document.querySelectorAll(".ghost-hand img");
  handImgs[n-1].classList.add("active");
}

function changeBubble(n) {
  const bubbleImgActive = document.querySelector(".ghost-bubble .active");
  bubbleImgActive.classList.remove("active");
  const bubbleImgs = document.querySelectorAll(".ghost-bubble img");
  bubbleImgs[n-1].classList.add("active");
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

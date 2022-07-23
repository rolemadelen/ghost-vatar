let bodies = [];
let heads = [];
let effects = [];
let eyes = [];
let mouths = [];
let hands = [];
let bubbles = [];

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

function change(ghostClass, tag) {
  let parent = document.querySelector(ghostClass);
  if(!parent.children[0]) {
    parent.appendChild(tag);
  } else if (parent.children[0] != tag) {
    parent.children[0].remove();
    parent.appendChild(tag);
  } else if(ghostClass !== ".ghost-body") {
    parent.children[0].remove();
  }
}

function changeHead(n) {
  change(".ghost-head", heads[n-1]);
}

function changeBody(n) {
  change(".ghost-body", bodies[n-1]);
}

function changeEffect(n) {
  change(".ghost-effect", effects[n-1]);
}

function changeEye(n) {
  change(".ghost-eye", eyes[n-1]);
}

function changeMouth(n) {
  change(".ghost-mouth", mouths[n-1]);
}

function changeHand(n) {
  change(".ghost-hand", hands[n-1]);
}

function changeBubble(n) {
  change(".ghost-bubble", bubbles[n-1]);
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
    let img = new Image();
    img.src = `./assets/body/ghost-body${i+1}.png`;
    bodies.push(img);
  }

  for (let i = 0; i < closetEffect.children.length; i += 1) {
    closetEffect.children[i].addEventListener("click", () =>
      changeEffect(i + 1)
    );
    let img = new Image(50, 50);
    img.src = `./assets/effect/ghost-effect${i+1}.png`;
    effects.push(img);
  }

  for (let i = 0; i < closetHead.children.length; i += 1) {
    closetHead.children[i].addEventListener("click", () => changeHead(i + 1));
    let img = new Image(50, 50);
    img.src = `./assets/head/ghost-head${i+1}.png`;
    heads.push(img);
  }

  for (let i = 0; i < closetEye.children.length; i += 1) {
    closetEye.children[i].addEventListener("click", () => changeEye(i + 1));
    let img = new Image(50, 50);
    img.src = `./assets/eyes/ghost-eye${i+1}.png`;
    eyes.push(img);
  }

  for (let i = 0; i < closetMouth.children.length; i += 1) {
    closetMouth.children[i].addEventListener("click", () => changeMouth(i + 1));
    let img = new Image(50, 50);
    img.src = `./assets/mouth/ghost-mouth${i+1}.png`;
    mouths.push(img);
  }

  for (let i = 0; i < closetHand.children.length; i += 1) {
    closetHand.children[i].addEventListener("click", () => changeHand(i + 1));
    let img = new Image(50, 50);
    img.src = `./assets/hand/ghost-hand${i+1}.png`;
    hands.push(img);
  }

  for (let i = 0; i < closetBubble.children.length; i += 1) {
    closetBubble.children[i].addEventListener("click", () =>
      changeBubble(i + 1)
    );
    let img = new Image(50, 50);
    img.src = `./assets/bubble/bubble${i+1}.png`;
    bubbles.push(img);
  }
};

let eye = 1;
let mouth = 1;

function switchPrevEye() {
    const eyeImg = document.querySelector('.ghost-eye__img');
    eye -= 1;
    if(eye <= 0) eye = 6;
    eyeImg.src=`./assets/eyes/ghost-eye${eye}.png`;
}

function switchNextEye() {
    const eyeImg = document.querySelector('.ghost-eye__img');
    eye += 1;
    if(eye >= 6) eye = 1;
    eyeImg.src=`./assets/eyes/ghost-eye${eye}.png`;
}

function switchPrevMouth() {
    const mouthImg = document.querySelector('.ghost-mouth__img');
    mouth -= 1;
    if(mouth <= 0) mouth = 6;
    mouthImg.src=`./assets/mouth/ghost-mouth${mouth}.png`;
}

function switchNextMouth() {
    const mouthImg = document.querySelector('.ghost-mouth__img');
    
    mouth+= 1;
    if(mouth >= 6) mouth = 1;
    mouthImg.src=`./assets/mouth/ghost-mouth${mouth}.png`;
}

document.addEventListener("load", () => {
    // const nextEyeButton = document.querySelector('.buttons>.eye>.eyeNext');
    // const nextMouthButton = document.querySelector('.buttons>.mouth>.mouthPrev');
    // const prevMouthButton = document.querySelector('.buttons>.mouth>.mouthPrev');
    
    // nextEyeButton.addEventListener("click", (e) => {
    //     console.log(e);
    // })
    
    // prevEyeButton.addEventListener("click", (e) => {
    //     console.log(e);
    // })
    
    // nextMouthButton.addEventListener("click", (e) => {
    //     console.log(e);
    // })
    
    // prevMouthButton.addEventListener("click", (e) => {
    //     console.log(e);
    // })
})
const dino = document.querySelector(".dino");
let isJumping = false;

function control(e) {
  if (e.keyCode === 32) {
    if (!isJumping) {
      isJumping = true;
      jump();
    }
  }
}
document.addEventListener("keyup", control);

const jump = () => {
  let position = 0;
  let timerId = setInterval(function () {
    // move down
    if (position === 150) {
      clearInterval(timerId);
      console.log("down");
      let downTimerId = setInterval(function () {
        position -= 30;
        dino.style.bottom = position + "px";
        if (position === 0) {
          clearInterval(downTimerId);
          isJumping = false;
        }
      }, 30);
    }
    // move up
    console.log("moved");
    position += 30;
    dino.style.bottom = position + "px";
  }, 30);
};

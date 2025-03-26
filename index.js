function addingEventListener() {
}
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left < 360) {  
    dodger.style.left = `${left + 10}px`;
  }
}


document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function addingEventListener() {
  const button = document.getElementById("button");

  if (button) {
    button.addEventListener("click", () => {
      alert("Button was clicked!");
    });
  }
}


addingEventListener();


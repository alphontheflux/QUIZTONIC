let fingers = {};
let selectionTimeout;

document
  .getElementById("fingerContainer")
  .addEventListener("touchstart", function (event) {
    event.preventDefault();

    for (let touch of event.touches) {
      if (!fingers[touch.identifier]) {
        let rect = event.target.getBoundingClientRect();
        let x = touch.clientX - rect.left;
        let y = touch.clientY - rect.top;

        let finger = document.createElement("div");
        finger.classList.add("finger");
        finger.style.left = `${x - 45}px`;
        finger.style.top = `${y - 45}px`;

        document.getElementById("fingerContainer").appendChild(finger);
        fingers[touch.identifier] = finger;

        setTimeout(() => {
          finger.classList.add("shrink");
        }, 300);
      }
    }

    clearTimeout(selectionTimeout);
    selectionTimeout = setTimeout(chooseFingers, 1500);
  });

document
  .getElementById("fingerContainer")
  .addEventListener("touchmove", function (event) {
    event.preventDefault();

    for (let touch of event.touches) {
      let finger = fingers[touch.identifier];
      if (finger) {
        let rect = event.target.getBoundingClientRect();
        let x = touch.clientX - rect.left;
        let y = touch.clientY - rect.top;

        finger.style.left = `${x - 45}px`;
        finger.style.top = `${y - 45}px`;
      }
    }
  });

document
  .getElementById("fingerContainer")
  .addEventListener("touchend", function (event) {
    for (let touch of event.changedTouches) {
      let finger = fingers[touch.identifier];
      if (finger) {
        finger.remove();
        delete fingers[touch.identifier];
      }
    }
  });

function chooseFingers() {
  let fingerArray = Object.values(fingers);

  if (fingerArray.length < 2) return;

  fingerArray.forEach((f) => f.classList.remove("chosen"));

  let chosen = [];
  while (chosen.length < 2) {
    let index = Math.floor(Math.random() * fingerArray.length);
    if (!chosen.includes(index)) chosen.push(index);
  }

  chosen.forEach((i) => fingerArray[i].classList.add("chosen"));
}

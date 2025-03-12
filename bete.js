let fingers = [];
let touchPositions = {};
let selectionTimeout;

// Gérer le touchstart (ajout de doigts)
document
  .getElementById("fingerContainer")
  .addEventListener("touchstart", function (event) {
    event.preventDefault();

    // Ajouter chaque nouveau doigt
    for (let touch of event.touches) {
      if (!touchPositions[touch.identifier]) {
        let rect = event.target.getBoundingClientRect();
        let x = touch.clientX - rect.left;
        let y = touch.clientY - rect.top;

        let finger = document.createElement("div");
        finger.classList.add("finger");

        finger.style.left = `${x - 45}px`;
        finger.style.top = `${y - 45}px`;

        document.getElementById("fingerContainer").appendChild(finger);
        fingers.push(finger);
        touchPositions[touch.identifier] = finger;

        setTimeout(() => {
          finger.classList.add("shrink");
        }, 300);
      }
    }

    // Démarrer le délai pour choisir les doigts
    clearTimeout(selectionTimeout);
    selectionTimeout = setTimeout(chooseFingers, 1500);
  });

// Gérer le touchend (retrait d'un doigt)
document
  .getElementById("fingerContainer")
  .addEventListener("touchend", function (event) {
    for (let touch of event.changedTouches) {
      let finger = touchPositions[touch.identifier];
      if (finger) {
        finger.remove();
        fingers = fingers.filter((f) => f !== finger);
        delete touchPositions[touch.identifier];
      }
    }

    // Si moins de 2 doigts, annuler la sélection
    if (fingers.length < 2) {
      clearTimeout(selectionTimeout);
    }
  });

// Gérer le touchmove (mouvement des doigts)
document
  .getElementById("fingerContainer")
  .addEventListener("touchmove", function (event) {
    event.preventDefault();

    for (let touch of event.touches) {
      let finger = touchPositions[touch.identifier];
      if (finger) {
        let rect = event.target.getBoundingClientRect();
        let x = touch.clientX - rect.left;
        let y = touch.clientY - rect.top;

        finger.style.left = `${x - 45}px`;
        finger.style.top = `${y - 45}px`;
      }
    }
  });

// Fonction pour choisir deux doigts au hasard
function chooseFingers() {
  if (fingers.length < 2) return;

  // Réinitialiser les doigts sélectionnés
  fingers.forEach((f) => f.classList.remove("chosen"));

  let chosen = [];
  while (chosen.length < 2) {
    let index = Math.floor(Math.random() * fingers.length);
    if (!chosen.includes(index)) chosen.push(index);
  }

  // Appliquer l'effet "chosen" aux doigts sélectionnés
  chosen.forEach((i) => fingers[i].classList.add("chosen"));
}

(function () {
  const activitemax = [
    "telephone arabe", "figure accrosport", "As tu déjà ri du malheur de quelqu'un ?", 
    "As tu déjà vomis dans un lieu public ?", "Meilleur anecdote de soirée", 
    "Meilleur anecdote au bassin a flot", "Meilleur anecdote avec un bureau", 
    "Meilleur anecdote avec un vélo", "Meilleur anecdote avec un bateau",
  ];

  const items = [
    "invente ta rencontre avec une personne", "decris quelqu'un en 3 adjectif", 
    "pompe avec une personne sur le dos", "course de chaise", "course de brouette", 
    "concours de regard", "lire les message avec une personne", "fais une chason sur une personne",
    "reproduit la scene du titanic", "reproduit le portée de Dirty Dancing", 
    "Changer de chaussures", "roulade", "pompe à une main", "fait le poirier", 
    "pictionnary", "invente une danse", "raconte une histoire avec une voix aigue", 
    "speech sur un objet banal", "présente la météo", "envoie un selfi ridicule à tes parents", 
    "essaye de faire un tour de magie", "karaoké", "imite une personne autour de toi", 
    "Quelle est ton talent chaché", "Quelle est le plat que tu as raté en cuisine", 
    "Quelle est le cadeau le plus bizarre que tu es reçu", "Quelle est la pire mode que tu est suivi", 
    "traverse la salle les yeux bander", "telephone arabe", "figure accrosport", 
    "As tu déjà ri du malheur de quelqu'un ?", "As tu déjà vomis dans un lieu public ?", 
    "Meilleur anecdote de soirée", "Meilleur anecdote au bassin a flot", 
    "Meilleur anecdote avec un bureau", "Meilleur anecdote avec un vélo", 
    "Meilleur anecdote avec un bateau",
  ];

  const doors = document.querySelectorAll(".door");

  document.querySelector("#spinner").addEventListener("click", spin);
  document.querySelector("#reseter").addEventListener("click", init);

  function init(firstInit = true, groups = 1, duration = 1) {
    for (const door of doors) {
      if (firstInit) {
        door.dataset.spinned = "0";
      } else if (door.dataset.spinned === "1") {
        return;
      }

      const boxes = door.querySelector(".boxes");
      const boxesClone = boxes.cloneNode(false);
      const pool = [""];

      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        pool.push(...shuffle(arr));
      }

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = door.clientWidth + "px";
        box.style.height = door.clientHeight + "px";
        box.textContent = pool[i];
        boxesClone.appendChild(box);
      }

      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
      door.replaceChild(boxesClone, boxes);
    }
  }

  async function spin() {
    init(false, 1, 3); 
  
    
    const promises = [];
    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
      const duration = parseInt(boxes.style.transitionDuration);
  
      
      boxes.style.transition = "transform 3s ease-out";
      boxes.style.transform = "translateY(0)"; 
  
     
      requestAnimationFrame(() => {
      
        promises.push(new Promise((resolve) => setTimeout(resolve, duration * 1000)));
      });
    }
  
    await Promise.all(promises);
  }
  

  function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }

  init();
})();


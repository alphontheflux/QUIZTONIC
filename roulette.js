const activitémax = [
  "telephone arabe",
  "figure accrosport",
  "As tu déjà ri du malheur de quelqu'un ?",
  "As tu déjà vomis dans un lieu public ?",
  "Meilleur anecdote de soirée",
  "Meilleur anecdote au bassin a flot",
  "Meilleur anecdote avec un bureau",
  "Meilleur anecdote avec un vélo",
  "Meilleur anecdote avec un bateau",
];

const activité1 = [
  "roulade",
  "pompe à une main",
  "fait le poirier",
  "pictionnary ",
  "invente une danse",
  "raconte une histoire avec une voix aigue",
  "speech sur un objet banal",
  "présente la météo",
  "envoie un selfi ridicule à tes parents",
  "essaye de faire un tour de magie",
  "karaoké",
  "imite une personne autour de toi",
  "Quelle est ton talent chaché",
  "Quelle est le plat que tu as raté en cuisine",
  "Quelle est le cadeau le plus bizarre que tu es reçu",
  "Quelle est la pire mode que tu est suivi",
  "traverse la salle les yeux bander",
];

const activité2 = [
  "invente ta rencontre avec une personne",
  "decris quelqu'un en 3 adjectif",
  "pompe avec une personne sur le dos",
  "course de chaise",
  "course de brouette",
  "concours de regard",
  "lire les message avec une personne",
  "fais une chason sur une personne",
  "reproduit la scene du titanic",
  "reproduit le portée de Dirty Dancing",
  "Changer de chaussures",
];

const items = [
  "telephone arabe",
  "figure accrosport",
  "As tu déjà ri du malheur de quelqu'un ?",
  "As tu déjà vomis dans un lieu public ?",
  "Meilleur anecdote de soirée",
  "Meilleur anecdote au bassin a flot",
  "Meilleur anecdote avec un bureau",
  "Meilleur anecdote avec un vélo",
  "Meilleur anecdote avec un bateau",
  "roulade",
  "pompe à une main",
  "fait le poirier",
  "pictionnary ",
  "invente une danse",
  "raconte une histoire avec une voix aigue",
  "speech sur un objet banal",
  "présente la météo",
  "envoie un selfi ridicule à tes parents",
  "essaye de faire un tour de magie",
  "karaoké",
  "imite une personne autour de toi",
  "Quelle est ton talent chaché",
  "Quelle est le plat que tu as raté en cuisine",
  "Quelle est le cadeau le plus bizarre que tu es reçu",
  "Quelle est la pire mode que tu est suivi",
  "traverse la salle les yeux bander",
  "invente ta rencontre avec une personne",
  "decris quelqu'un en 3 adjectif",
  "pompe avec une personne sur le dos",
  "course de chaise",
  "course de brouette",
  "concours de regard",
  "lire les message avec une personne",
  "fais une chason sur une personne",
  "reproduit la scene du titanic",
  "reproduit le portée de Dirty Dancing",
  "Changer de chaussures",
];

document.querySelector("#spinner").addEventListener("click", spin);

const shitcase = document.querySelectorAll(".shitcase");
const midcase = document.querySelectorAll(".midcase");
let upTabCase = [];
let midTabCase = [];
let downTabCase = [];

function choisirPhrase() {
  let allActivities = [...activitémax, ...activité1, ...activité2];
  let randomIndex = Math.floor(Math.random() * allActivities.length);
  return allActivities[randomIndex];
}

function spin() {

    for (let i = 0; i < 15; i++) {
        upTabCase.push(choisirPhrase());
        midTabCase.push(choisirPhrase());
        downTabCase.push(choisirPhrase());
    }


    shitcase.forEach((div) => {
      const p = document.createElement("p");
      p.textContent = downTabCase[Math.floor(Math.random() * downTabCase.length)];
      div.append(p);
    });

    midcase.forEach((midDiv) => {
      const midP = document.createElement("p");
      midP.textContent = midTabCase[Math.floor(Math.random() * midTabCase.length)]; 
      midDiv.append(midP);
    });


    midcase.forEach((midDiv) => {
      const lastP = midDiv.querySelector("p:last-child");
      if (lastP) {
        let midPhrase = lastP.textContent
        console.log(midPhrase)
      }
    });

    midcase.style.transform = `translateY(-${midTabCase.length}px)`;
    console.log(downTabCase);
}
const activitémax =  [
  "Téléphone arabe",
  "Figure d'acrosport",
  "As-tu déjà ri du malheur de quelqu'un ?",
  "As-tu déjà vomi dans un lieu public ?",
  "Meilleure anecdote de soirée",
  "Meilleure anecdote au Bassin à Flot",
  "Meilleure anecdote avec un bureau",
  "Meilleure anecdote avec un vélo",
  "Meilleure anecdote avec un bateau",
];

const activité1 =[
  "Roulade",
  "Pompe à une main",
  "Fais le poirier",
  "Fais deviner un dessin",
  "Invente une danse",
  "Raconte une histoire avec une voix aiguë",
  "Speech sur un objet banal",
  "Présente la météo",
  "Envoie un selfie ridicule à tes parents",
  "Essaye de faire un tour de magie",
  "Karaoké",
  "Imite une personne autour de toi",
  "Quel est ton talent caché ?",
  "Quel est le plat que tu as raté en cuisine ?",
  "Quel est le cadeau le plus bizarre que tu as reçu ?",
  "Quelle est la pire mode que tu as suivie ?",
  "Traverse la salle les yeux bandés",
];

const activité2 = [
  "Invente ta rencontre avec une personne",
  "Décris quelqu'un en 3 adjectifs",
  "Pompes avec une personne sur le dos",
  "Course de chaise",
  "Course de brouette",
  "Concours de regard",
  "Lis les messages avec une personne",
  "Fais une chanson sur une personne",
  "Reproduis la scène du Titanic",
  "Reproduis le porté de Dirty Dancing",
  "Changez de chaussures",
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
  "Fais deviner un dessin ",
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
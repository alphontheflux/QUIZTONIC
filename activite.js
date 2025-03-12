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

const activité = [activité1, activité2, activitémax];

function doigt(activite) {
  for (let i = 0; i < activité.length; i++) {
    if (activité[i].includes(activite)) {
      return i;
    }
  }
  return -1;
}

console.log(doigt("telephone arabe"));
console.log(doigt("concours de regard"));
console.log(doigt("traverse la salle les yeux bander"));

const malus = [
  "imite l'accent belge pendant 4 tours",
  "imite l'accent quebeqois pendant 3 tours",
  "fais la chaise pendant 1 minute",
  "1 minute de gainage",
  "parle comme Jeff Tuche pendant 3 tours",
  "tu n'as plus de chaise pendant 4 tours",
  "imite un animal au lieu de parler",
  "Parler extrement lentement pendant 3 minute",
  "Mettre un fruit dans chaque phrases pendant 2 tours",
  "Parler uniquement avec des citation de film pendant 5 minute",
];

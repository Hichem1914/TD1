const boutons = document.querySelectorAll('.choix');
const affichage = document.getElementById('affichage-resultat');
const victoiresEl = document.getElementById('score-victoire');
const egalitesEl = document.getElementById('score-egalite');
const defaitesEl = document.getElementById('score-defaite');
const resetBtn = document.getElementById('btn-reset');

const options = ['Pierre', 'Feuille', 'Ciseaux'];

let score = { victoires: 0, egalites: 0, defaites: 0 };
/* essaie d'ajouter des couleurs aux boutons
boutons.forEach(bouton => {
  const texte = bouton.textContent.trim(); 
  if(texte === 'Pierre') bouton.classList.add('pierre');
  else if(texte === 'Feuille') bouton.classList.add('feuille');
  else if(texte === 'Ciseaux') bouton.classList.add('ciseaux');
});
*/
function majScore() {
  victoiresEl.textContent = score.victoires + (score.victoires > 1 ? ' victoires' : ' victoire');
  egalitesEl.textContent = score.egalites + (score.egalites > 1 ? ' égalités' : ' égalité');
  defaitesEl.textContent = score.defaites + (score.defaites > 1 ? ' défaites' : ' défaite');
}

// dans cette fonction on determine le resultat d'un tour 
function determinerResultat(joueur, ordi) {
  if (joueur === ordi) return 'egalite';
  if (
    (joueur === 'Pierre' && ordi === 'Ciseaux') ||
    (joueur === 'Feuille' && ordi === 'Pierre') ||
    (joueur === 'Ciseaux' && ordi === 'Feuille')
  ) {
    return 'victoire';
  }
  return 'defaite';
}

// Quand le joueur clique sur un bouton
boutons.forEach(bouton => {
  bouton.addEventListener('click', () => {
    const choixJoueur = bouton.textContent;
    const choixOrdi = options[Math.floor(Math.random() * options.length)];
    const resultat = determinerResultat(choixJoueur, choixOrdi);

    if (resultat === 'victoire') score.victoires++;
    else if (resultat === 'egalite') score.egalites++;
    else score.defaites++;

    majScore();

    affichage.innerHTML =`Tu as choisi <b>${choixJoueur}</b><br>
                          L'ordinateur a choisi <b>${choixOrdi}</b><br>
                          Résultat : <strong>${resultat}</strong>`;
  });
});

// on réinitialise le score en fonction du click du joueur
resetBtn.addEventListener('click', () => {
  score = { victoires: 0, egalites: 0, defaites: 0 };
  majScore();
  affichage.textContent = 'Scores remis à zéro. Clique pour rejouer !';
});

majScore();
const app = {
  player: {
    x: 0,
    y: 0,
    direction: "right",
  },

  targetCell: {
    x: 5,
    y: 3,
  },
  //PARTIE 1
  //creation des div row et cell
  drawBoard: function () {
    const boardElement = document.querySelector(`#board`);
    for (let i = 0; i < 4; i++) {
      //première boucle pour les div row adopter par #board

      const rowElement = document.createElement(`div`);
      rowElement.classList.add(`row`);
      boardElement.appendChild(rowElement);
      //console.log(rowElement);

      for (let j = 0; j < 6; j++) {
        //deuxième boucle pour les div cell adopter par les div row
        const cellElement = document.createElement(`div`);
        cellElement.classList.add(`cell`);
        rowElement.appendChild(cellElement);
        //console.log(cellElement);

        /*
        Toujours dans la méthode drawBoard, lors de la création des cases, on rajoute une série de test :

        Si la case courante a les mêmes coordonnées (x ET y) que la variable targetCell, 
        on ajoute la classe CSS targetCell à la case.
        Cette classe CSS est a créer pour que la case soit verte. */

        // récuperer la case courante

        // console.log(cellElement);
      }
    }
    const cellElements = document.querySelectorAll(`.cell`); //sélectionne toutes les div avec la classe .cell

    const returnTarget = Object.assign(cellElements[23], app.targetCell); // j'assigne la propriétés de target cell a l'élement cell
    //console.log(returnTarget);
    if (returnTarget === cellElements[23]) {     //si c'est le cas
      cellElements[23].classList.add(`targetcell`); //j'ajoute la class css targetCell
    } else {
      console.log(`je suis dans le else`); // sinon un console.log
    }

    //case d'arrivée ===============

    // const cellElementFinal = cellElements[23];
    // cellElementFinal.classList.add(`targetCell`);
    // //==============================
  },

  init: function () {
    console.log("init !");
    app.drawBoard(); // initialisation de la fonction d création de la grille
  },
};
console.log(app.targetCell);

document.addEventListener("DOMContentLoaded", app.init);

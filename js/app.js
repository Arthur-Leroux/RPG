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
      }
    }

    //PARTIE 2
    //cell d'arrivée
    const cellElements = document.querySelectorAll(`.cell`); //sélectionne toutes les div avec la classe .cell

    const returnTargetFinal = Object.assign(cellElements[23], app.targetCell); // j'assigne la propriétés de target cell a l'élement cell
    //console.log(returnTarget);
    if (returnTargetFinal === cellElements[23]) {
      //si c'est le cas
      cellElements[23].classList.add(`targetcell`); //j'ajoute la class css targetCell
    } else {
      console.log(`je suis dans le else`); // sinon un console.log
    }

    //PARTIE 2
    //cell du player
    const returnTargetPlayer = Object.assign(cellElements[0], app.player);
    if (returnTargetPlayer === cellElements[0]) {
      const newDivElement = document.createElement(`div`);
      newDivElement.classList.add(`player`);
      cellElements[0].appendChild(newDivElement);
      console.log(newDivElement);
    } else {
      console.log(`je suis dans le else`); // sinon un console.log
    }
  },

  
  //PARTIE 3 
  //
  clearBoard: function () {


  },
    //PARTIE 3 
    //
  //   redrawBoard: function(){

  //   app.clearBoard();
  //   app.drawBoard();
  



  // },

  init: function () {

    console.log("init !");
    app.drawBoard(); // initialisation de la fonction d création de la grille
    app.clearBoard();
   // app.redrawBoard();
  },
};
console.log(app.targetCell);

//app.redrawBoard();

document.addEventListener("DOMContentLoaded", app.init);

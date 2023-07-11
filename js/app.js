const app = {
  x: 0,
  y: 0,
  direction: "right",
  targetCell: {
    x: 5,
    y: 3,
  },
  //creation des div row et cell
  drawBoard: function () {
    const boardElement = document.querySelector(`#board`);
    for (let i = 0; i < 4; i++) {
      //première boucle pour les div row adopter par #board
      
      const rowElement = document.createElement(`div`);
      rowElement.classList.add(`row`);
      boardElement.appendChild(rowElement);
      console.log(rowElement);
    
    for (let j = 0; j < 6; j++) {
      //deuxième boucle pour les div cell adopter par les div row
      const cellElement = document.createElement(`div`);
      cellElement.classList.add(`cell`);
      rowElement.appendChild(cellElement);
      console.log(cellElement);
    }
  }
  },

  init: function () {
    console.log("init !");
    app.drawBoard(); // initialisation de la fonction d création de la grille
  },
};

document.addEventListener("DOMContentLoaded", app.init);

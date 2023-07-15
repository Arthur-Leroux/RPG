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
    for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
      //première boucle pour les div row adopter par #board

      const rowElement = document.createElement(`div`);
      rowElement.classList.add(`row`);
      boardElement.appendChild(rowElement);
      //console.log(rowElement);

      for (let cellIndex = 0; cellIndex < 6; cellIndex++) {
        //deuxième boucle pour les div cell adopter par les div row
        const cellElement = document.createElement(`div`);
        cellElement.classList.add(`cell`);
        rowElement.appendChild(cellElement);
        // //PARTIE 2
        // //cell du player
        if (app.player.y === rowIndex && app.player.x === cellIndex) {
          // Si la case en cours a les mêmes coordonnées que la case du player
          const playerDiv = document.createElement("div"); // On ajoute une div dans la case courante
          playerDiv.classList.add("player");
          cellElement.appendChild(playerDiv);

          playerDiv.classList.add(app.player.direction);
        }
        if (app.targetCell.y === rowIndex && app.targetCell.x === cellIndex) {
          cellElement.classList.add(`target-cell`);
        }
      }
    }
  },
  //On vide le contenu de la grille "#board"
  clearBoard: function () {
    const boardElement = document.querySelector(`#board`);
    boardElement.innerHTML = "";
  },
  redrawBoard: function () {
    app.drawBoard();
    app.clearBoard();
  },
  turnRight: function () {
    // Si le player est orienté vers le up => right
    // Si le player est orienté vers le right => down
    // Si le player est orienté vers le down => left
    // Si le player est orienté vers le left => up
    // sémentiquement la même choses plus de 3 fois => utiliser un switch
    switch (player.direction) {
      case "up": //=> Si la case player vaut up
        player.direction = "right"; //=>  je rotate vers right
        break; //=> je pas oublier le break.
      case "right":
        player.direction = "down";
        break;
      case "down":
        player.direction = "left";
        break;
      case "left":
        player.direction = "up";
        break;
      default:
        console.log(`There is an error in the player position`);
    }
  },

  init: function () {
    console.log("init !");
    app.drawBoard(); // initialisation de la fonction d création de la grille
    //app.clearBoard();
    //app.redrawBoard();
  },
};
console.log(app.targetCell);

document.addEventListener("DOMContentLoaded", app.init);

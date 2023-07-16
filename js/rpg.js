const app = {
  init() { // ES6
    app.drawBoard();
    app.listenToKeyboardEvents();
  },
  
  gameOver: false,
  
  playerCell: {
    x: 0,
    y: 0,
    direction: "right" // right ; left ; up ; down
  },
  
  targetCell: {
    x: 5,
    y: 3
  },
  
  drawBoard() {
    const boardElement = document.querySelector("#board"); // On récupère le bord
    
    for (let rowIndex = 0; rowIndex < 4; rowIndex++) {   // On veut créer 4 rows (div), contennant chaque fois 6 cells (div)
    
      const rowElement = document.createElement("div"); // On créé la div
      rowElement.classList.add("row"); // On lui met un style
      boardElement.appendChild(rowElement); // On l'insère dans le BOARD
    
      for (let cellIndex = 0; cellIndex < 6; cellIndex++) {
        const cellElement = document.createElement("div"); // On créé la div
        cellElement.classList.add("cell"); // On lui met un style
        rowElement.appendChild(cellElement); // On l'insère dans la LIGNE
    
        // Est-ce que cette case que je suis en train de créer dans cette boucle est la case du player?
        // Si oui : on colle à cette case la classe 'player' comme ça, ça nous dessine le player sur cette case (plutôt qu'une case vide)
    
        if (app.playerCell.y === rowIndex && app.playerCell.x === cellIndex) { // Si la case en cours a les mêmes coordonnées que la case du player
          const playerDiv = document.createElement("div"); // On ajoute une div dans la case courante
          playerDiv.classList.add("player");
          cellElement.appendChild(playerDiv);
    
          // Je veux que visuellement on change l'orientation du player
          // si le joueur est orienté vers le haut => on lui colle une classe qui le rotate de -90deg.
          // si le joueur est orienté vers le bas => on lui colle une classe qui le rotate de 90deg. etc..
          playerDiv.classList.add(app.playerCell.direction); // Astuce de pro ! Si app.playerCell.direction vaut 'up', on met la classe 'up' à la div player. Idem pour les autres valeurs 
        }
    
        if (app.targetCell.y === rowIndex && app.targetCell.x === cellIndex) { // Si la case courante est celle de la target
          cellElement.classList.add("target-cell"); // On prend l'élément courant et on lui met la classe 'app.targetCell'
        }
      }
    }
    
    app.isGameOver();
  },
  
  clearBoard() {
    // On vide le contenu de la grille #board. 
    const boardElement = document.getElementById("board"); // Selectionner l'élément à vider
    boardElement.innerHTML = ""; // Ecraser son innerHTML
  },
    
  redrawBoard() {
    app.clearBoard();
    app.drawBoard();
  },
  
  turnRight() {
    // si le player est orienté vers le up => right
    // si le player est orienté vers le right => down
    // si le player est orienté vers le down => left
    // si le player est orienté vers le left => up
    
    if (app.gameOver) { return; } // condition de garde
    
    switch (app.playerCell.direction) {
    case "right":  // app.playerCell.direction === "right"
      app.playerCell.direction = "down"; break;
    case "up":
      app.playerCell.direction = "right"; break;
    case "left":
      app.playerCell.direction = "up"; break;
    case "down":
      app.playerCell.direction = "left"; break;
    default:
      console.log("There is an error in the player position");
    }
    
    app.redrawBoard();
  },
  
  turnLeft() {
    if (app.gameOver) { return; } // condition de garde
    
    switch (app.playerCell.direction) {
    case "right":  // equivalent de (app.playerCell.direction === "right")
      app.playerCell.direction = "up"; break;
    case "up":
      app.playerCell.direction = "left"; break;
    case "left":
      app.playerCell.direction = "down"; break;
    case "down":
      app.playerCell.direction = "right"; break;
    default:
      console.log("There is an error in the player position");
    }
    
    app.redrawBoard();
  },
  
  moveForward() {
    if (app.gameOver) { return; } // condition de garde
    
    // Vérifier si le player peut bouger avant de passer à la suite. S'il ne peut pas, on arrete la fonction. Sinon ça continue
    if (! canPlayerMove()) { return; }
      
    
    // Si la direction du joueur est 'right', on veut que la position en X du player augmente d'une case (x++)
    // Si la direction du joueur est 'left', on veut que la position en X du player diminue d'une case (x--)
    // Si la direction du joueur est 'up', on veut que la position en Y du player diminue d'une case (y--)
    // Si la direction du joueur est 'down', on veut que la position en Y du player augmente d'une case (y++)
    // Une fois qu'on a mis à jour l'état du player, on redraw le board pour prendre en compte cet état 
    switch(app.playerCell.direction) {
    case "right": 
      if (app.playerCell.x === 5) { return; }
      app.playerCell.x++; break;
    case "left":
      app.playerCell.x--; break;
    case "up":
      app.playerCell.y--; break;
    case "down":
      app.playerCell.y++; break;
    default: console.log("il y a une erreur qqpart");
    }
    
    app.redrawBoard();
    
    function canPlayerMove() {
      // Si le joueur est orienté 'right' et que x === 5, il peut pas bouger. 
      // Si le joueur est orienté 'left' et que x === 0, il peut pas bouger. 
      // Si le joueur est orienté 'up' et que y === 0, il peut pas bouger. 
      // Si le joueur est orienté 'down' et que y === 3, il peut pas bouger. 
      if (app.playerCell.direction === "right" && app.playerCell.x === 5) { return false; }
      if (app.playerCell.direction === "left" && app.playerCell.x === 0) { return false; }
      if (app.playerCell.direction === "up" && app.playerCell.y === 0) { return false; }
      if (app.playerCell.direction === "down" && app.playerCell.y === 3) { return false; } // Des 'conditions de garde'
    
      return true;
    }
  },
  
  listenToKeyboardEvents() {
    // Faire en sorte que :
    // Lorsque l'utilisateur appuie sur une touche du clavier, ça déclenche les actions moveForward, turnLeft, turnRight
    // On écoute le keyup sur le DOM (document), et en cas de keyup, on veut déjà récupérer la touche du clavier sur laquelle l'utilisateur a appuyé
    document.addEventListener("keyup", (event) => { // En pratique, je met toujours l'event et si je me rends compte que je n'en aurais pas besoin dans le corps de la fonction, je l'enlèverai plus tard
      const pressedKey = event.key;
      switch(pressedKey) {
      case "ArrowLeft":
        app.turnLeft(); break;
      case "ArrowRight":
        app.turnRight(); break;
      case "ArrowUp":
        app.moveForward(); break;
      case "t": // Bonus, la case cheat code
        app.jumpToTarget(); break;
      default: break;
      }
    });
  },
    
  jumpToTarget() {
    app.playerCell.x = app.targetCell.x;
    app.playerCell.y = app.targetCell.y;
    app.redrawBoard();
  },
  
  isGameOver() {
    if (app.playerCell.x === app.targetCell.x && app.playerCell.y === app.targetCell.y) {
      app.gameOver = true;
      setTimeout(() => {
        alert("C'est gagné ! GG !");
      }, 10); // J'appelle la fonction dans 10ms
    

      
  }
},
}

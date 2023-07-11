const app = {
  x: 0,
  y: 0,
  direction: "right",
  targetCell: {
    x: 5,
    y: 3,
  },

  drawBoard: function () {
    for (let i = 0; i < 4; i++) {
      const boardElement = document.querySelector(`#board`);
      const rowElement = document.createElement(`div`);
      rowElement.classList.add(`row`);
      boardElement.appendChild(rowElement);
      console.log(rowElement);
      for (let i = 0; i < 6; i++) {
        const cellElement = document.createElement(`div`);
        rowElement.appendChild(cellElement);
        console.log(cellElement);
      }
    }
  },

  init: function () {
    console.log("init !");
    app.drawBoard();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
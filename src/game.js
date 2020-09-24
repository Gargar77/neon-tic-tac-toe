const Board = require("./board");

class Game {
  constructor() {
    this.board = new Board();
    this.currentPlayer = Board.marks[0];
  }

  isOver() {
    return this.board.isOver();
  }

  playMove(pos) {
    this.board.placeMark(pos, this.currentPlayer);
    
    this.swapTurn();
  }

  // promptMove(reader, callback) {
  //   const game = this;

  //   this.board.print();

  //   reader.question('Enter rowIdx: ', rowIdxStr => {
  //     const rowIdx = parseInt(rowIdxStr);
  //     reader.question('Enter colIdx: ', colIdxStr => {
  //       const colIdx = parseInt(colIdxStr);
  //       callback([rowIdx, colIdx]);
  //     });
  //   });
  // }


  swapTurn() {
    if (this.currentPlayer === Board.marks[0]) {
      this.currentPlayer = Board.marks[1];
    } else {
      this.currentPlayer = Board.marks[0];
    }
  }

  winner() {
    return this.board.winner();
  }
}

module.exports = Game;

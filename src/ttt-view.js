class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
    console.log($el.children('li'));
  }

  bindEvents() {
    view.$el.on('click','.square',(event) => {
      let target = $(event.currentTarget);
      let $square = $(target)
      this.makeMove($square);
      if (this.game.isOver()) {
        this.$el.off('click');
      }
    });
  }

  makeMove($square) {
    const pos = $square.data('pos');
    const mark = game.currentPlayer;
    try {
    game.playMove([parseInt(pos[0]),parseInt(pos[2])]);
    }
    catch(error) {
      alert(error.message);
      return;
    }
    $square.addClass(mark).text(mark);
    if(this.game.isOver()) {
      if(this.game.winner()) {
        this.win();
      } else {
        this.draw();
      }
    }
  }

  win() {
    const winner = this.game.winner();
    let element = `<figcaption class="win"><span>${winner} wins!</span></figcaption>`;
    this.$el.after(element);
    this.highlightWinner(winner);
  }
  highlightWinner(winner) {
    // $(`.${winner}`).css('background-color',"green").css("color","white");
    $(`.${winner}`).addClass('winner');
    const loser = winner === 'x' ? 'o' : 'x';

    // $(`.${loser}`).css("color","red");
    $(`.${loser}`).addClass('loser');
    
  }

  draw() {
    $('.square').addClass('draw');
    this.$el.after('<figcaption class="win"><span>DRAW</span></figcaption>');
  }

  setupBoard() {

    for(let rowIdx = 0;rowIdx < 3;rowIdx++) {
      let $row = $('<ul class="row">');
      for(let colIdx = 0; colIdx < 3;colIdx++) {
        let $square = $('<li class="square">');
        $square.attr("data-pos",[rowIdx,colIdx]);
        $row.append($square);
      }
      this.$el.append($row);
    }
    

  }
}


module.exports = View;



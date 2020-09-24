const View = require('./ttt-view');
const Game = require('./game');

const StartGame = () => {
  game = new Game();
    // $startModal.css("display","none");
    
    view = new View(game,$('.ttt'));
    toggleStart($startModal)
    view.bindEvents();
    var run = setInterval(function() {
      if(game.isOver()) {
        clearInterval(run);

      }
    },60); 
}

const toggleStart = () => {
  $('#profile-link').animate({
    opacity:0
  },500)

  $('#main-title').animate({
    opacity:0
  },500)

  $startModal.animate({
    opacity:0
  },500,()=> {

    $('#main-title').animate({
      opacity:1
    },500)

    let view = $('.ttt');
    let startModal = $('#start-modal')
    startModal.css("display","none");
    view.css("display","inline-block");
    view.addClass("game-start");
  })
}




const $startModal = $('#start-modal');
document.getElementById('start-button')
  .addEventListener("click",StartGame);


  // $(() => {
  //   game = new Game();
  //   view = new View(game,$('.ttt'));
  //   view.bindEvents();
  //   var run = setInterval(function() {
  //     if(game.isOver()) {
  //       clearInterval(run);

  //     }
  //   },60); 
  // });

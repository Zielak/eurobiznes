
import Game from './Game';
import Rules from './Rules';

console.clear();

var game = new Game(Rules);

window.game = game;

gameStartBtn.addEventListener('click', (e)=>{
  game.start();
});

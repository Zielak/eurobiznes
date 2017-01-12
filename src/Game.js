
import Reactor from './Reactor';
import Bank from './Bank';
import Board from './Board';
import Dice from './Dice';
import Player from './Player';
import Rules from './Rules';


function Game(){
  
  function start(options){
    options = !!options ? options : {} 

    this.bank = new Bank();
    this.board = new Board();
    this.players = [];
    this.dice = new Dice(Rules.dice.dice, Rules.dice.faces);
    

    setupPlayers(options.players);

    console.log('Well, the game has started');
  }

  function setupPlayers(count){
    
    for (let i=0; i < count; i++) {
      this.players.push( new Player(`Player ${i}`) );
    }

  }


  return {
    start,

    bank: this.bank,
    board: this.board,
  };
}

var game = new Game();

export default game;



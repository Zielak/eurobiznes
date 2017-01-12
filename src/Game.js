
import Reactor from './Reactor';
import Bank from './Bank';
import Board from './Board';
import Dice from './Dice';
import Rules from './Rules';


function Game(){
  
  function start(){
    this.bank = new Bank();
    this.board = new Board();
    this.players = [];
    this.dice = new Dice(Rules.dice.dice, Rules.dice.faces);
    

    setupPlayers();

    console.log('Well, the game has started');
  }

  function setupPlayers(){
    
  }


  return {
    start,

    bank: this.bank,
    board: this.board,
  };
}

var game = new Game();

export default game;



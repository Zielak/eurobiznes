
import Reactor from './Reactor';
import Bank from './Bank';
import Board from './Board';


function Game(){
  
  function start(){
    this.bank = new Bank();
    this.board = new Board();
    this.players = [];
    
    console.log('Well, the game has started');
  }


  return {
    start,

    bank: this.bank,
    board: this.board,
  };
}

var game = new Game();

export default game;



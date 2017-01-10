
import Reactor from './Reactor';
import Bank from './Bank';
import Board from './Board';

var bank, board;

function Game(){
  
  function start(){
    bank = new Bank();
    board = new Board();
    console.log('Well, the game has started');
  }


  let GameAPI = {
    start,
  };
  return GameAPI;
}

export default Game();



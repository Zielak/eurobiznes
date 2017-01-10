
import Reactor from './Reactor';
import Bank from './Bank';
import Board from './Board';

export default class Game extends Reactor {

  constructor(){
    super();
  }

  start(){

    this.bank = new Bank();
    this.board = new Board();
    console.log('whoops');
  }

}

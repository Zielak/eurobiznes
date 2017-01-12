
import Reactor from './Reactor';
import Pawn from './Pawn';

export default class Player {

  constructor(name, pawn){
    this.state = new Reactor();
    this.name = name;

    this.pawn = initPawn(pawn);
    
    this.state.register('money', 0);
    this.state.watch('money', moneyWatcher, this);
  }

}

function initPawn(pawn){
  if(!pawn){
    return new Pawn();
  }else{
    return pawn;
  }
}

function moneyWatcher(newValue, oldValue){
  console.log('Player: money! I\'ve got: $', newValue - oldValue);
}

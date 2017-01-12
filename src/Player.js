
import Reactor from './Reactor';

export default class Player {

  constructor(name, pawn){
    this.state = new Reactor();
    this.name = name;
    this.pawn = pawn;
    
    this.state.register('money', 0);
    this.state.watch('money', moneyWatcher, this);
  }

}

function moneyWatcher(newValue, oldValue){
  console.log('Player: money! I\'ve got: $', newValue - oldValue);
}

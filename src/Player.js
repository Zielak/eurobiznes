
import Reactor from './Reactor';

export default class Player extends Reactor {

  constructor(name, pawn){
    super();
    this.name = name;
    this.pawn = pawn;
    
    register('money', 0);
    watch('money', moneyWatcher, this);
  }

}

function moneyWatcher(newValue, oldValue){
  console.log('Player: money! I\'ve got: $', newValue - oldValue);
}


import Reactor from './Reactor';

export default class Pawn {
   
  constructor(color){
    this.state = new Reactor();

    this.color = color;

    this.state.register('field', undefined);
  }

}


import Reactor from './Reactor';

export default class Pawn extends Reactor {
   
  constructor(color){
    super();

    this.color = color;

    register('field', undefined);
  }

}

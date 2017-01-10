
import Field from './Field';
import Reactor from './Reactor';

function houseAdded(house){
  console.log('House added on property', this.name, house);
}



export default class Property extends Field {

  constructor(o) {
    super();

    this.state = new Reactor();

    this.state.register('houses', []);
    this.state.register('hotels', []);

    this.state.watchArray('houses', houseAdded, this);
  }

  addHouse(house){
    this.houses.push(house);
  }

  charge(){


    return;
  }

}

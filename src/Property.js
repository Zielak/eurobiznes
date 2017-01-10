
import Reactor from './Reactor';

function houseAdded(house){
  console.log('House added on property', this.name, house);
}

export default class Property extends Reactor {

  constructor(name, price, field) {
    super();

    this.name = name;
    this.price = price;
    this.field = field;

    register('houses', []);
    register('hotels', []);

    watchArray('houses', houseAdded, this);
  }

  addHouse(house){
    this.houses.push(house);
  }

  charge(){


    return;
  }

}

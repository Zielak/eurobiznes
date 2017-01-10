
import Field from './Field';
import Fields from './Fields';
import Reactor from './Reactor';

export default class Board extends Reactor{

  constructor(){
    super();
    
    this.redChangeCards = [];
    this.blueChangeCards = [];

    this.fields = Fields();

    this.countries = [];

  }

  

  pickRedChance(){
    pickChanceCard(this.redChangeCards);
  }

  pickBlueChance(){
    return pickChanceCard(this.blueChangeCards);
  }




}

function pickChanceCard(array){
  let card = array.shift();

  array.push(card);

  console.log(card);
  return card;
}

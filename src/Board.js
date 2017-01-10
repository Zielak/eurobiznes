
import Field from './Field';
import Fields from './Fields';
import Reactor from './Reactor';

export default class Board extends Reactor{

  constructor(){
    super();
    
    this.redChangeCards = [];
    this.blueChangeCards = [];

    this.fields = [];
    generateFields(this.fields);

    this.countries = [];

  }

  

  pickRedChance(){
    pickChanceCard(this.redChangeCards);
  }

  pickBlueChance(){
    pickChanceCard(this.blueChangeCards);
  }




}

function generateFields(fields){
  for(let f in Fields()){
    fields.push(f);
  }
  return fields;
}

function pickChanceCard(array){
  let card = array.shift();

  array.push(card);

  return card;
}

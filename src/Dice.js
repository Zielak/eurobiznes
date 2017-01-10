
export default class Dice {
  constructor(dice, faces){
    this.dice = [];
    
    for (let i = 0, len = dice; i < len; i++) {
      this.dice[i] = new Die(faces);
    }
  }

  roll(){
    let sum = 0;
    let dice = [];
    this.dice.forEach( (die, i) => {
      let drop = die.roll();
      sum += drop;
      dice[i] = drop;
    });
    return {
      sum: sum,
      dice: dice,
    };
  }
}

class Die {
  
  constructor(faces){
    this.faces = faces;
  }

  roll(){
    return Math.ceil( (Math.random() * this.faces-1) + 1);
  }

}

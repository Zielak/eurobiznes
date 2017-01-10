(function(global) {
  'use strict';

  function Die(faces){
    this.faces = faces;
  }
  Die.prototype.roll = function roll(){
    return Math.ceil( (Math.random() * this.faces-1) + 1);
  };
  


  function Dice(dice, faces){
    this.dice = [];
    
    for (let i = 0, len = dice; i < len; i++) {
      this.dice[i] = new Die(faces);
    }
  }
  
  Dice.prototype.roll = function roll(){
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
  };

  global.Dice = Dice;

})(window);
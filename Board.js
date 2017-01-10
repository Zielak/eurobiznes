(function(global) {
  'use strict';
  
  function Board(){
    this.redChangeCards = [];
    this.blueChangeCards = [];

    this.fields = [];
    generateFields();

    this.countries = [];

  }

  Board.prototype.generateFields = function generateFields(){

  };
  
  Board.prototype.pickRedChance = function pickRedChance(){
    pickChanceCard(this.redChangeCards);
  };
  Board.prototype.pickBlueChance = function pickBlueChance(){
    pickChanceCard(this.blueChangeCards);
  };

  function pickChanceCard(array){
    let card = array.shift();

    array.push(card);

    return card;
  }


  global.Board = Board;

})(window);
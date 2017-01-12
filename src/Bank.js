
export default class Bank {

  constructor(){
    this.money = 50000; //??
    this.houses = [];
    this.hotels = [];
  }

  get HOUSE(){return 'house';}
  get HOTEL(){return 'hotel';}
  get MONEY(){return 'money';}
  get PLAYER(){return 'player';}


  give( what, where, value ){
    
    switch( what ){
      case this.HOUSE:
      
      case this.MONEY:
        giveMoney( where, value );
    }

  }

}

function giveMoney( player, value ){
  let cash = value;

  this.money -= cash;
  if(this.money < 0){
    cash = cash - Math.abs(this.money);
  }

  player.money += cash;
  return cash;
}


import Field from './Field';
import Property from './Property';
import Bank from './Bank';
import Game from './Game';

function field( options ){
  let f = new Field(options);
  return f;
}
function prop( options ){
  let f = new Property(options);
  return f;
}

export default function Fields(){
  return [
    field({
      name: 'Start',
      onEnter: () => Game.bank.give( Bank.PLAYER, Bank.MONEY, 400 ),
    }),
    prop({
      name: 'Saloniki',
      value: 120,
    }),
    field({
      name: 'Blue Chance',
      onEnter: () => Game.board.pickBlueChance(),
    }),
  ];
}
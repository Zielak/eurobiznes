
import Field from './Field';
import Bank from './Bank';

function field( options ){
  let f = new Field(options);
  return f;
}

export default function Fields(){
  return [
    field({
      name: 'Start',
      onEnter: window.game.bank.give()
    })
  ]

};

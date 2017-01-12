
import Game from './Game';

((global) => {

  console.clear();

  gameStartBtn.addEventListener('click', (e)=>{

    let players = parseInt(prompt('how many players'));

    Game.start({
      players: players,
    });
  });

})(window);
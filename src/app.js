
import Game from './Game';

((global) => {

  console.clear();

  gameStartBtn.addEventListener('click', (e)=>{
    Game.start();
  });

})(window);
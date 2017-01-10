(function(global){

  let rules = {
    
  };

  var game = new Game(rules);

  gameStartBtn.addEventListener('click', (e)=>{
    game.start();
  });

})(window);

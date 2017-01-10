
(function(global) {
  'use strict';
  
  function Field(name, value){
    this.name = name;
    this.value = value;

  }

  Field.prototype.start = function start(){

  };

  global.Field = Field;

})(window);

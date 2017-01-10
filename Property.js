
(function(global) {
  'use strict';
  
  function Property(name, price, field){
    this.name = name;
    this.price = price;
    this.field = field;

    this.state = new global.Reactor();
    this.state.register('houses', []);
    this.state.register('hotels', []);

    
  }

  Property.prototype.addHouse = function addHouse(house){
    this.state.houses.push(house);
  };

  Property.prototype.charge = function stachargert(){


    return;
  };

  global.Property = Property;

})(window);

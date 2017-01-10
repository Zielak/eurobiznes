
(function(global) {
  'use strict';
  
  function Reactor(){
    
    var data = {};

    this.watch = function watch( variable, callback, thisObj ){

      if(!data.hasOwnProperty(variable)){
        this.register(variable);
      }

      thisObj = thisObj || window;
      
      data[variable].observers[callback] = function(newValue, oldValue){
        callback(newValue, oldValue);
      }.bind(thisObj);
      
      fire(variable, data[variable].value, data[variable].oldValue);

      return this;
    };

    this.unwatch = function unwatch(variable, callback){
      data[variable].observers = filterObject(data[variable].observers, function(item) {
        if (item !== callback) {
          return item;
        }
      });

      return this;
    };

    this.register = function register(variable, value){

      data[variable] = {
        oldValue : undefined,
        value : value,
        observers : {}
      };

      Object.defineProperty(this, variable, {
        get : function getter(){
          return data[variable].value;
        },
        set : function setter(newValue){
          if(data[variable].value === newValue){
            return;
          }
          
          data[variable].oldValue = data[variable].value;
          data[variable].value = newValue;
          
          fire(variable, data[variable].value, data[variable].oldValue);
        }
      });
    
    return this;

    };

    function fire(variable, newValue, oldValue){
      var callback;

      for (var key in data[variable].observers) {
        // skip loop if the property is from prototype
        if (!data[variable].observers.hasOwnProperty(key)){
          continue;
        }

        callback = data[variable].observers[key];

        if(typeof callback === 'function'){
          callback(newValue, oldValue);
        }
      }
    }

    function filterObject(object, predicate){
      var result = {}, key;

      for (key in object) {
        if (object.hasOwnProperty(key) && !predicate(object[key])) {
          result[key] = object[key];
        }
      }

      return result;
    }

    
  }


  global.Reactor = Reactor();

})(window);

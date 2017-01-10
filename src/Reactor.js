
export default class Reactor {

  constructor() {
    this.data = {};
  }

  
  /**
   * Register new variable
   * @param {string} variable variable name
   * @param {any=} value initial value
   * @return {object} this
   */
  register(variable, value){

    data[variable] = {
      oldValue : undefined,
      value : value,
      observers : {}
    };

    function getter(){
      return data[variable].value;
    }
    function setter(newValue){
      if(data[variable].value === newValue){
        return;
      }
      
      data[variable].oldValue = data[variable].value;
      data[variable].value = newValue;
      
      fire(variable, data[variable].value, data[variable].oldValue);
    }

    Object.defineProperty(this, variable, {
      get : getter,
      set : setter,
    });
  
    return this;

  }

  /**
   * Start watching this variable for changes
   * @param {string} variable variable name
   * @param {function(*,*)} callback function(newValue, oldValue)
   * @param {object=} thisObj bind the call somewhere
   * @return {object} this
   */
  watch( variable, callback, thisObj ){

    if(!data.hasOwnProperty(variable)){
      this.register(variable);
    }

    thisObj = thisObj || undefined;
    
    data[variable].observers[callback] = function(newValue, oldValue){
      callback(newValue, oldValue);
    }.bind(thisObj);
    
    fire(variable, data[variable].value, data[variable].oldValue);

    return this;
  }

  watchArray( variable, added, removed, thisObj ){
    
    let proxy;
    
    if(Array.isArray(variable)){
      proxy = new Proxy(variable, {
        apply: function proxy_Apply(target, thisArg, argumentsList) {
          return thisArg[target].apply(this, argumentsList);
        },
        deleteProperty: function proxy_DeleteProperty(target, property) {
          console.log("Deleted %s", property);
          removed(target).bind(thisObj);
          return true;
        },
        set: function proxy_Setter(target, property, value, receiver) {
          target[property] = value;
          console.log("Set %s to %o", property, value);
          added(value).bind(thisObj);
          return true;
        }
      });
    }
  }

  /**
   * Unsubscribe one specific observer
   * @param {string} variable variable name
   * @param {function} callback observer
   * @return {object} this
   */
  unwatch(variable, callback){
    data[variable].observers = filterObject(data[variable].observers, function(item) {
      if (item !== callback) {
        return item;
      }
    });

    return this;
  }

  /**
   * Fired only when change has happened.
   * Calls every observer with new and old values
   * @param {string} variable variable name
   * @param {any} newValue
   * @param {any} oldValue
   * @return {object} this
   */
  fire(variable, newValue, oldValue){
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

    return this;
  }

  filterObject(object, predicate){
    var result = {}, key;

    for (key in object) {
      if (object.hasOwnProperty(key) && !predicate(object[key])) {
        result[key] = object[key];
      }
    }

    return result;
  }

}

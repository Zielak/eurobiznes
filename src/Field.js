
var DEFAULT_NAME = 'New Field';
var DEFAULT_VALUE = 100;

export default class Field {
  
  /**
   * @param {object} o {name, value, onEnter, onExit, country}
   */
  constructor(o){
    o = !!o ? o : {};

    this.name = o.name || DEFAULT_NAME;
    this.value = o.value;

    this.onEnter = o.onEnter;
    this.onExit = o.onExit;

    this.country = o.country;
  }

}

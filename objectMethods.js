//JAVASCRIPT OBJECT METHODS
  //Here we will look into all the different object methods in javascript

  const cake = {
    tier: 1,
    weight: 1000,
    shape: "circle",
    flavour: "chocolate",
    cakeOrder: function() {
      return this.tier + " " + this.weight + "g " + this.shape + " " + this.flavour + " cake.";
    }
  };


//Constructor
//Static Methods
//Instance Methods


//__defineGetter__()
    //binds an object's property to a function to be called when the property is looked up.
    //when the property is called, the function is called automatically
    cake.__defineGetter__("cakePic", function(){
      return `iiiiiiiiiiiiiiiiiii
      |||||||H|A|P|P|Y|||||||
    __|_____________________|__
   |\/\/\/\/\/\/\/\/\\/\/\/\/\/|
   |||||||B|I|R|T|H|D|A|Y|||||||
   |,,,,,,,,,,,,,,,,,,,,,,,,,,,|
   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@`;     
           });

    console.log(cake.cakePic);

//__defineSetter__()
    //binds an object's property to a function that is to be called when an attempt is made to set that property

    cake.__defineSetter__("price", function (val) {
      this.cakePrice = val;
    });

//__lookupGetter__()
    //returns the function bound as a getter to the specified property
    cake.__lookupGetter__("cakePic");

//__lookupSetter__()
    //returns the function bound as a setter to the specified property.
    cake.__lookupSetter__("price");


//__proto__
   //accessor property that exposes the internal prototype of the object through which it is accessed
   //use of this is controversial and discouraged
   
   cake.__proto__

//constructor
    //any object will have a constructor property on its [[property]]

    cake.constructor ===Object; //true

//hasOwnProperty() 
    //returns a boolean indicating whether the object has the specified property as its own property

    cake.hasOwnProperty('flavour');//true

    cake.hasOwnProperty('taste');//false

//isPrototypeOf()
    //checks if an object exists in another object's prototype
    //returns the object whose prototype chain will be searched


//assign()
    //copies all enumerable own properties from one or more source objects to a target object
    //returns the modifies target object
    const pie = {tier: 1, weight: 200, toppings: 3};
    `{tier: 1, weight: 200, shape: 'circle', flavour: 'chocolate', cakeOrder: ƒ, …}
cakeOrder
: 
ƒ ()
cakePic
: 
(...)
cakePrice
: 
50
flavour
: 
"chocolate"
shape
: 
"circle"
tier
: 
1
toppings
: 
3
weight
: 
200
get cakePic
: 
ƒ ()
set price
: 
ƒ (val)
[[Prototype]]
: 
Object
`

//create()
    //creates a new object using an existing object as the prototype of the newly created object
    const desert = Object.create(cake);

//defineProperties()
    //defines new or modifies existing properties directly on an object, returning the object
    Object.defineProperties(cake, {
      property1: {
          value: 42, 
          writable: true},
      property2: {}
  });

//defineProperty()
  //defines a new property directly on an object or modifies an existing property on an object, and returns the object
  Object.defineProperty(cake, 'icing', {
    value: 'buttercream'
});
//entries()
  //returns an array of a given object's own enumerable string-keyed property key-value pairs
  Object.entries(cake);
  //or
  for( let [key, value] of Object.entries(cake)){
    console.log(`${key}: ${value}`);
}
  


//freeze()
  //prevents extensions and makes esisting properties non-writable and non-configurable.
  //the object can no longer be changed, new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed
  //returns the same object that was passed in

    Object.freeze(cake);
  {flavour: 'chocolate', shape: 'circle', weight: 1000, tier: 1, cake_description: ƒ, …}
  cake.flavour = 'vanilla';

  console.log(cake.flavour);
  //'chocolate'

//fromEntries()
  //transforms a list of key-valued pairs into an object.
  const newArray = [['1', 'one'], ['2', 'two']];
  //undefined
  const newObj = Object.fromEntries(newArray);
  //undefined
  console.log(newObj);
  //{1: 'one', 2: 'two'}


//getOwnPropertyDescriptor
  //returns an object describing the configuration of a specific property on a given object
  Object.getOwnPropertyDescriptor(newObj, '1');
  //{value: 'one', writable: true, enumerable: true, configurable: true}


//getOwnPropertyDescriptors
  //returns all own property descriptors of a given object

  Object.getOwnPropertyDescriptors(newObj);


//getOwnPropertyNames
  //returns an array of all properties found directly in a given object

  Object.getOwnPropertyNames(newObj)
  //['1', '2']

//getOwnPropertySymbols
  //returns an array of all symbol properties found directly upon a given object
  const a = Symbol('a');
  //undefined
  newObj[a] = 'localSymbol';
  //'localSymbol'
  Object.getOwnPropertySymbols(newObj);
  //[Symbol(a)]


//hasOwn
  //returns true if the specified object has the indicated property as its own property
  //if the property is inherited, or does not exist, the method returns false

  Object.hasOwn(newObj, '1');
  //true


//is
  //determines whether two values are the same value
  Object.is('hey', 'sameHey');
  //false
  Object.is(25, 25);
  //true

//isExtensible
  //determines if an object is extensible
  //whether it can have new properties added to it
  Object.isExtensible(newObj);
  //true


//isFrozen
  //determines if an object is frozen
  Object.freeze(newObj);
  //{1: 'one', 2: 'two'}
  Object.isFrozen(newObj);
  //true


//isSealed
  //determines if an object is sealed
  Object.isSealed(newObj);
  //true

//keys
  //returns an array of a given object's own enumerable sting-keyed property names
  Object.keys(newObj);
    //(2) ['1', '2']


//preventExtensions
  //prevents new properties to be added to an object and also prevent the object's prototype from being re-assigned
  Object.preventExtensions(newObj);
  //{1: 'one', 2: 'two'}
  Object.defineProperty(object1, 'property1', {
      value: 42
    });
  //VM721:1 Uncaught ReferenceError: object1 is not defined
      //at <anonymous>:1:24


//seal
    //prevents extensions, makes existing properties non-configurable
    //has a fixed set of properties
    //new properties cannot be added
    //existing properties cannot be removed
    //enumerability and configuration cannot be changed
    //prototype cannot be reassigned
    //values of existing prototypes can still be changed as long as they are writable

    Object.seal(newObj);


//setPrototypeOf
    //sets the prototype of a specified object to another object or null


//toLocaleString
    //returns a string representing the object
    //meant to be overriden by derived objects for locale-specific purposes

    const indianPrices = priceMoney.toLocaleString("in", {
      style : "currency",
      currency: "IND",}); 
      //'IND 1.000,00,IND 2.000,00,IND 2.500,00'


//toString
      //returns a string representing the object

      Object.toString(newObj);
      //'function Object() { [native code] }'

//valueOf
      //converts the 'this' value to an object.

      cake.valueOf() === cake;
      //true
      Object.prototype.valueOf(cake);
      //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}


//values
      //returns an array of a given object's own enumerable string-keyed property values
      Object.values(cake);
      //(5) ['chocolate', 'circle', 1000, 1, ƒ]

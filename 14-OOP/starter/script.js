'use strict';

// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
    // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

// never create a method inside the constructor
//   this.clalAge = function() {
//       console.log(2021-this.birthYear);
//   }

};

const jonas = new Person('Jonas', 1991);
console.log(jonas)
console.log(jonas instanceof Person)
//  1. New {} is created 
//  2.  function is called, this = {}
//  3. {} linked to prototype 
//  4. function automaticlly return {}

// Prototypes 
// each and every function in js has a properties called prototype that include the constructer function 

console.log(Person.prototype)
// Person.prototype is not prototype of Person inted its Prototype for object created Person constractur function 

Person.prototype.calcAge =function() {
    console.log(2021-this.birthYear);
}

jonas.calcAge()

console.log(jonas.__proto__)
console.log(jonas.__proto__ === Person.prototype)
console.log(Person.prototype.isPrototypeOf(jonas))
console.log(Person.prototype.isPrototypeOf(Person)) // 
// Person.prototype is not prototype of Person inted its Prototype for object created Person constractur function 
// .prototypeOfLinkdObject




jonas.hasOwnProperty('firstName')
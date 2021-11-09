'use strict';

console.log('scoping-----------------------------');
console.log('');
console.log('');

const firstName = 'Jonas';
calcAge(1991);

function calcAge(birthYear) {
  const age = 2047 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // var become function scope
      //   creating New variables with same name as outer scope's variablr
      const firstName = 'Steven';
      // reasssigning outer scope's variab'
      output = 'NEW OUTPUT';

      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 3));
      console.log();
    }
    console.log(millenial);
    console.log(output);
  }

  //   console.log(millenial); this wont work its bec out side the function scope.
  printAge();
  return age;
}

console.log('');
console.log('');
console.log('Hoisting---------------------------------');
console.log('');
console.log('');

// Hoisting

// Variables

// console.log(me)
// console.log(job)
// console.log(year)

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//  functions

console.log(addDecl(2, 3));
// console.log(addExpr(2,3))
// console.log(addArrow(2,3))

function addDecl(a, b) {
  // we can only use function declaration befor
  return a + b; // initialization
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b; // var will retun undefined if we try to
// access it before initialization

// Example

if (!numProducts) {
  deleteShoppingCart();
}
var numProducts = 10;

function deleteShoppingCart() {
  console.log('all product deleted');
}

console.log('');
console.log('');
console.log('This keyword-----------------------------');
console.log('');
console.log('');

console.log(this); // refers to Windows object / global object

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined in strict mode otherwis
  // window object
};
calcAge1(1991);

//  Arrow function

const clacArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // arow function does't have is own thiskeyword it
  // uses lexcal thiskeyword or srrounging object
};

clacArrow(1991);

console.log('');
console.log('');
console.log('Regular function Vs Arrow fumction -----------------------------');
console.log('');
console.log('');

const Samuel = {
  firstName: 'samuel',
  year: 1991,
  calcAge2() {
    // console.log(this)
    console.log(2037 - this.year);
  },

  greet: () => console.log(`hey ${this.firstName}`), // undefined
};

Samuel.greet();
Samuel.calcAge2();


// this keyword in a regular function call inside  function 

const tamir = {
  firstName: 'Tamir',
  year: 1991,
  calcAge2() {
    // console.log(this)
    const self = this        // solution # 1 self or that key by 
                            // assigning this key to self or that variable
    console.log(2037 - this.year);

    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const isMillenial = () =>{  // solution # 2 using Arrow function : is
            //using (lexcal this  key( automatic bind) form its // parent )

        console.log(this.year >= 1981 && this.year <= 1996);
      };
  

    isMillenial();
  },
  greet() {                              // regular Function
    //   console.log(this)
    console.log(`hey ${this.firstName}`);
  },
};

tamir.greet();
tamir.calcAge2()


// Arguments Keyword 
// the argument keyword only avilable in regular function expressions

const addExpr2 = function (a, b) {
    console.log(arguments)
    return a + b;
  };
addExpr2(2, 5)

  var addArrow2 = (a, b) => {
      console.log(arguments)
    return a+ b;
    
  }
//   addArrow2() //  erro 

// Primitiv Vs Object 


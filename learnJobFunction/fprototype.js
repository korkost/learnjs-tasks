// function Rabbit() { }
// Rabbit.prototype = {
//     eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// console.log(rabbit.eats);



// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

//    Rabbit.prototype = {};

// console.log( rabbit.eats );




// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// console.log( rabbit.eats );



// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// console.log( rabbit.eats );



function User(name) {
    this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log(user2.name);
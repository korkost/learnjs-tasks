// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __promo__: animal,
//     jumps: true
// };

// console.log( rabbit.jumps ); 

// delete rabbit.jumps;

// console.log( rabbit.jumps );

// delete animal.jumps;

// console.log( rabbit.jumps );



let head = {
    glasses: 1
};

// let table = {
//     pen: 3,
//     __proto__: head
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed
// };

// console.log( pockets.pen );
// console.log( bed.glasses );
// console.log( table.money );



// let animal = {
//     eat() {
//         this.full = true;
//     }
// };

// let rabbit = {
//     __proto__: animal
// };

// rabbit.eat();



let hamster = {
    stromach: [],

    eat(food) {
        this.stromach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stromach: []
};

let lazy = {
    __proto__: hamster,
    stromach: []
};

speedy.eat("apple");
console.log(speedy.stromach);

console.log(lazy.stromach);
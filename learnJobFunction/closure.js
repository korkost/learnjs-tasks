function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1());
console.log(counter1())

console.log(counter2())
console.log(counter2())


function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter = new Counter();
console.log(counter.up());
console.log(counter.up());
console.log(counter.down());


let pharse = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${pharse}, ${user}`);
    }
}

sayHi();



function sum(a) {

    return function (b) {
        return a + b;
    };

}

console.log(sum(1)(2));
console.log(sum(-5)(-6));


let arr = [1, 2, 3, 4, 5, 6, 7];

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}


console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));



let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => console.log(user.name));

users.sort(byField('age'));
users.forEach(user => console.log(user.name));


function makeArmy() {

    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () {
            console.log(j);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();

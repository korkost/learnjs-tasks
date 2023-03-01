let user = {};

function A() { return user; }
function B() { return user; }

console.log(new A() == new B());


function Calculator() {

    this.read = function () {
        this.a = 5;
        this.b = 7;
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

console.log("Sum = " + calculator.sum() + ";");
console.log("Mul = " + calculator.mul() + ";");


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += 8;
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
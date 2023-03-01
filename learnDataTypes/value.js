let a = +("4");
let b = +("4");

console.log(a + b);


console.log(Math.round(6.35 * 10) / 10);


function readNumber() {
    let num;

    do {
        num = 6;
    } while (!isFinite(num));

    if (num === null || num === "") return null;

    return +num;
}

console.log(`Число: ${readNumber()}`);


let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) console.log(i);
}


function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));


function randomInteger(min, max) {
    return Math.floor(Math.random() * (min, max));
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));


function randomFlor(min, max) {
    if (max <= min || min < 0) {
        return;
    }
    const result = Math.random() * (max - min) + min;
    return parseFloat(result.toFixed(1));
}

console.log(randomFlor(1, 5));
console.log(randomFlor(1, 5));
console.log(randomFlor(1, 5));
console.log(randomFlor(1, 5));
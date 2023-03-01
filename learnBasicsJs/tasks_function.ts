checkAge(19);

function checkAge(age: number) {
    if (age > 18) {
        return true;
    }
    return console.log('Родители разрешили?');
}


const overwriteFun = (age: number) => age > 18 ? true : console.log('Родители разрешили?');
overwriteFun(19);


const overwriteFunction = (age: number) => age > 18 || console.log('Родители разрешили?');
overwriteFunction(19);

function pow(x: number, n: number) {
    let result: number;

    if (n >= 1 && (n % 1 == 0)) {
        result = x ** n;
    } else return `Степень ${n} не поддерживается`

    return result;
}

console.log(pow(2, 6));

function min(a: number, b: number) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(2, 5));
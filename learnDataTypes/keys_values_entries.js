let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries() {
    return Object.values(salaries).reduce((a, b) => a + b, 0);
}

console.log(sumSalaries(salaries));



let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}

console.log(count(user));
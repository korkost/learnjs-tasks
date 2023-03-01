function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


function filterRange(arr, a, b) {
    arr.sort((a, b) => a - b);
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

console.log(arr);


function filterRangeInPlace(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        if (a > array[i] || array[i] > b) {
            array.splice(i, 1);
            i--;
        }
    }
}

let array = [5, 3, 8, 2, 1];

filterRangeInPlace(array, 1, 4);

console.log(array);


let array1 = [5, 2, 1, -10, 8];

array1.sort((a, b) => b - a);

console.log(array1);



function copySorted(array2) {
    return array2.slice().sort();
}

let array2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(array2);

console.log(sorted);
console.log(array2);


function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (strin) {

        let split = strin.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            throw Error("Ошибка чтения");
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("NaN ** 3");
console.log(result);


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

console.log(names);


let vasilia = { name: "Вася", surname: "Пупкин", id: 1 };
let petia = { name: "Петя", surname: "Иванов", id: 2 };
let mashi = { name: "Маша", surname: "Петрова", id: 3 };

let usersData = [vasilia, petia, mashi];

let usersMapped = usersData.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

console.log(usersMapped[2].id);
console.log(usersMapped[1].fullName);


function sortByAge(array3) {
    array3.sort((a, b) => a.age > b.age ? 1 : -1);
}

let array3 = [vasya, petya, masha];
sortByAge(array3);

console.log(array3[0].name);
console.log(array3[1].name);
console.log(array3[2].name);


function shuffle(arrNum) {
    for (let i = arrNum.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arrNum[i], arrNum[j]] = [arrNum[j], arrNum[i]];
    }
}

let arrNum = [1, 2, 3];

shuffle(arrNum);
console.log(arrNum);


function getAverageAge(users) {
    let result = users.reduce((prev, user) => prev + user.age, 0) / users.length;
    return Math.round(result);
}

let arrMiddleAge = [vasya, petya, masha];

console.log(getAverageAge(arrMiddleAge));


function unique(arrStr) {
    let result = [];

    for (let str of arrStr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));


let usersArr = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(array4) {
    return array4.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let usersById = groupById(usersArr);

console.log(usersById);
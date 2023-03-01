let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);



function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

const user = {
    name: "John"
};
user.name = "Pete";

console.log(user.name);



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
    return obj;
}

console.log(multiplyNumeric(menu));
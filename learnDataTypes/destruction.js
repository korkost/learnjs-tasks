let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let max = 0;
let maxName = null;

function topSalary(salaries) {
    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}

console.log(topSalary(salaries));
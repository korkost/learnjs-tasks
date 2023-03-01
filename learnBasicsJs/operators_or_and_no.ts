console.log(null || 2 || undefined);// 2

console.log(console.log(1) || 2 || console.log(3));//2

console.log(console.log(1) && console.log(2));//undefined

console.log(null || 2 && 3 || 4);// 3



const g = (age: number) => {
    if (age >= 14 && age <= 90)
        return console.log('true');
}

g(54);



function f() {
    if (-1 || 0) console.log('first');// true
    if (-1 && 0) console.log('second');// false
    if (null || -1 && 1) console.log('third');// true
}

f();



function isAdmin(login: string, password: string) {
    if (login == "Админ") {
        if (password == "Я главный") {
            console.log("Здравствуйте!")
        } else if (password === '' || password === null) {
            console.log("Отменено")
        } else {
            console.log("Неверный пароль");
        }
    } else if (login === '' || login === null) {
        console.log("Отменено");
    } else {
        console.log("Я вас не знаю");
    }
}

isAdmin("Админ", "Я главный");
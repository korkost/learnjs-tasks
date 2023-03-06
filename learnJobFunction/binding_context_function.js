// function f() {
//     console.log(this);
// }

// let user = {
//     g: f.bind(null)
// };

// user.g();



// function f() {
//     console.log(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

// f();



// function sayHi() {
//     console.log( this.name );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
//     name: "Вася"
// });

// console.log( bound.test );



// function askPassword(ok, fail) {
//     let password = ("Password?", '');
//     if(password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'Вася',

//     loginOk() {
//         console.log(`${this.name} loggen in`);
//     },

//     loginFail() {
//         console.log(`${this.name} failed to log in`);
//     },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));



// function askPassword(ok, fail) {
//     let password = ("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'John',

//     login(result) {
//         console.log(this.name + (result ? ' logged in' : ' failed to log in'));
//     }
// };

// askPassword(() => user.login(true), () => user.login(false));
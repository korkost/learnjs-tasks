// function spy(func) {

//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }

//     wrapper.calls = [];

//     return wrapper;
// }

// function work(a, b) {
//     console.log(a + b);
// }

// work = spy(work);

// work(1, 2);
// work(4, 5);

// for (let args of work.calls) {
//     console.log('call:' + args.join());
// }



// function delay(f, ms) {

// return function () {
//     setTimeout(() => f.apply(this, arguments), ms);
// };

// }

// function f(x) {
//     console.log(x);
// }

// let f2000 = delay(f, 2000);
// let f9000 = delay(f, 9000);

// f2000("test");
// f9000("test");


// function debounce(f, ms) {

//     let isCooldown = false;

//     return function() {
//         if (isCooldown) return;

//         f.apply(this, arguments);
//         isCooldown = true;

//         setTimeout(() => isCooldown = false, ms);
//     };
// }

// let f = debounce(console.log, 1000);

// f(1); 
// f(2); 

// setTimeout( () => f(3), 100); 
// setTimeout( () => f(4), 1100); 
// setTimeout( () => f(5), 1500);



function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null
            }
        }, ms)
    }
    return wrapper;
}

function f(a) {
    console.log(a)
}


let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
f1000(4);
f1000(5);
f1000(6);
f1000(7);
f1000(8);
f1000(9);
f1000(10);
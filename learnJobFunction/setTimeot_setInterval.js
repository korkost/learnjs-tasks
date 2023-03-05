function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers(7, 10);


function printNumbersRecurs(from, to) {
    let currents = from;

    setTimeout(function go() {
        console.log(currents);
        if (currents < to) {
            setTimeout(go, 1000);
        }
        currents++;
    }, 1000);
}

printNumbersRecurs(5, 8);


let i = 0;

setTimeout(() => console.log(i), 100);

for (let j = 0; j < 100000000; j++) {
    i++;
}
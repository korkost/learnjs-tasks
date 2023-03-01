const lastValue = (i: number) => {
    while (i) {
        console.log(i--);//3, 2, 1
    }
}
lastValue(3);

const prefixValues = (i: number) => {
    while (++i < 5) {
        console.log(i);// 1, 2, 3, 4
    }
};
prefixValues(0);


const postfixValues = (i: number) => {
    while (i++ < 5) {
        console.log(i);// 1, 2, 3, 4, 5
    }
};
postfixValues(0);

const prefixValuesFor = (i: number) => {
    for (let i = 0; i < 5; ++i) {
        console.log(i);// 0, 1, 2, 3, 4
    }
};
prefixValuesFor(0);

const postfixValuesFor = (i: number) => {
    for (let i = 0; i < 5; i++) {
        console.log(i);// 0, 1, 2, 3, 4
    }
};
postfixValuesFor(0);


function evenNumbers() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i);
        };
    }
}
evenNumbers();


function replacementCycle() {
    let i = 0;
    while (i < 3) {
        console.log(`number ${i}!`);
        i++;
    }
}
replacementCycle();

function repeatInputLoop() {
    let num: any;
    do {
        num = console.log("Введите число больше 100?", 0);
    } while (num <= 100 && num)
}
repeatInputLoop();

let n = 10;
nextPrime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    console.log(i);
}

function sumToCycle(numCy) {
    let sum = 0;
    for (let i = 1; i <= numCy; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToCycle(10);



function sumToRecur(numRe) {
    if (numRe == 1) return 1;
    return numRe + sumToRecur(numRe - 1);
}

console.log(sumToRecur(10));



function sumToArith(numArith) {
    return numArith * (numArith + 1) / 2;
}

console.log(sumToArith(10));



function factorial(numFact) {
    return (numFact != 1) ? numFact * factorial(numFact - 1) : 1;
}

console.log(factorial(5));



function fib(num) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}


console.log(fib(6));
console.log(fib(7));
console.log(fib(10));



let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// function printListCycle(list) {
//     let result = list;
//     while (result) {
//         console.log(result.value);
//         result = result.next;
//     }

// }
// printListCycle(list);


// function printList(list) {

//     console.log(list.value);

//     if (list.next) {
//         printList(list.next);
//     }

// }

// printList(list);



// function printReverseList(list) {
//     let array = [];
//     let tmp = list;

//     while (tmp) {
//         array.push(tmp.value);
//         tmp = tmp.next;
//     }

//     for (let i = array.length - 1; i >= 0; i--) {
//         console.log(array[i]);
//     }
// }

// printReverseList(list);


function printRecursionList(list) {

    if (list.next) {
        printRecursionList(list.next);
    }

    console.log(list.value);
}

printRecursionList(list);
let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let o = 2;
let x = 1 + (o *= 2);
console.log(x);

"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false;// 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5// "$45"
"4" - 2// 2
"4px" - 2// NaN
"  -9  " + 5// " -9 5"
"  -9  " - 5// -14
null + 1// 1
undefined + 1// NaN
" \t \n" - 2// -2

let p = "1";
let l = "2";

console.log(+p + +l);
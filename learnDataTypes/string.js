const ucFirst = (str) => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));


function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));


function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));


const extractCurrencyValue = (str) => {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));
if ("0") {
    console.log('Привет');// выведется
}




let value = 'Какое "официальное" название JavaScript?';

function officialName(value: string) {
    if (value === 'ECMAScript') {
        console.log('Верно!');
    } else {
        console.log('Не знаете? ECMAScript!');
    }
};

officialName('ECMASc');



function currentUserInput(value: number) {
    if (value > 0) {
        console.log(1);
    } else if (value < 0) {
        console.log(-1);
    } else {
        console.log(0);
    }
};

currentUserInput(10);




let conditionStatmen = (a: number, b: number) => a + b < 4 ? console.log('Мало') : console.log('Много');

conditionStatmen(1, 3);



let multipleConditionStatmen = (login: string) => login == 'Сотрудник' ? console.log('Привет') : (login == 'Директор') ? console.log('Здравствуйте') :
    (login == '') ? console.log('Нет логина') :
        console.log('');

multipleConditionStatmen('');
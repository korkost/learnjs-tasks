let d = new Date(2012, 1, 20, 3, 12);
console.log(d);



function getWeekDay(dateWeek) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[dateWeek.getDay()];
}

let dateWeek = new Date(2023, 2, 1);
console.log(getWeekDay(dateWeek));



function getLocalDay(dateLocal) {

    let day = dateLocal.getDay();

    if (day == 0) {
        day = 7;
    }

    return day;
}

let dateLocal = new Date(2023, 2, 1);
console.log(getLocalDay(dateLocal))



function getDateAgo(dateAge, days) {
    let dateCopy = new Date(dateAge);

    dateCopy.setDate(dateAge.getDate() - days);
    return dateCopy.getDate();
}

let dateAge = new Date(2023, 2, 1);

console.log(getDateAgo(dateAge, 1));
console.log(getDateAgo(dateAge, 2));
console.log(getDateAgo(dateAge, 365));



function getLastDayOfMonth(year, month) {
    let dateMonth = new Date(year, month + 1, 0);
    return dateMonth.getDate();
}

console.log(getLastDayOfMonth(2023, 0));
console.log(getLastDayOfMonth(2023, 1));
console.log(getLastDayOfMonth(2023, 2));



function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today;
    return Math.round(diff / 1000);
}

console.log(getSecondsToday());



function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;

    return totalSecondsInADay - totalSecondsToday;
}

console.log(getSecondsToTomorrow());



function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return 'прямо сейчас';
    }

    let sec = Math.floor(diff / 1000);

    if (sec < 60) {
        return sec + ' сек. назад';
    }

    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + ' мин. назад';
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date - 1)));

console.log(formatDate(new Date(new Date - 30 * 1000)));

console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));

console.log(formatDate(new Date(new Date - 86400 * 1000)));


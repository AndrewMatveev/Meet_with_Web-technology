// let age = 101;
// if (age == 18) {
//     alert('Вы совершеннолетний, все можно!');
// } else if (age == 10) {
//     alert('Вам надо учить уроки!');
// } else if (age == 30) {
//     alert('Ложитесь спать, завтра на работу');
// } else {
//     alert('Мы не знаем что Вам делать');
// }

let age = prompt("Хав олд ар ю?", ["Уже можно"]);
switch (age) {
    case '18':
        alert('Вы совершеннолетний, все можно!');
        document.location.href = "https://www.youtube.com/watch?v=2E8FtY_YSws&t=1s";
        break

    case '10':
        alert('Вам надо учить уроки!');
        document.location.href = "https://www.youtube.com/watch?v=6H5tFskC5e0";
        break

    case '30':
        alert('Ложитесь спать, завтра на работу');
        document.location.href = "https://www.youtube.com/watch?v=2T40SdNBSF4";
        break

    default:
        alert('Мы не знаем что Вам делать');
        break
}


// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let st1 = `hello world`
// let st2 = `lorem ipsum`
// let st3 = `javascript is cool`
// console.log(st1.length);
// console.log(st2.length);
// console.log(st3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str0 = `hello world`
// console.log(str0.toUpperCase());
// let str1 = `lorem ipsum`
// console.log(str1.toUpperCase())
// let str2 = `javascript is cool`
// console.log(str2.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str0 = `HELLO WORLD`
// console.log(str0.toLowerCase());
// let str1 = `LOREM IPSUM`
// console.log(str1.toLowerCase())
// let str2 = `JAVASCRIPT IS COOL`
// console.log(str2.toLowerCase())

// - Є "брудна" стрінга  . Почистити її від зайвих пробілів.
// let str = '     dirty string      '
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let stringtoarr = str.split (' ')
// console.log(stringtoarr);
// function stringtoarray (str) {
//     let Splinter = str.split(' ')
//     return Splinter
// }
//
// let arr = stringtoarray(str)
// console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let mass = [10,8,-7,55,987,-1011,0,1050,0]
// let str = mass.map(String)
// console.log(str);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// function sortNums(numss, direction){
//     if (direction==='ascending'){
//         numss.sort((num1, num2) => num1 - num2)
//     }
//     if (direction==='descending'){
//         numss.sort((num1, num2) => num2 - num1)
//     }
// }
// sortNums(nums, 'ascending')
// console.log(nums); // [3,11,21]
// sortNums(nums, 'descending')
// console.log(nums); // [21,11,3]

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.sort((title1, title2) => title2 - title1)
// console.log(coursesAndDurationArray);
//

// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5)
// console.log(filter);
// описати колоду карт
// - знайти піковий туз
// let find = cards.find(vaule => vaule.cardSuit === `spades` && vaule.value === `Ace`)
// console.log(find);
// - всі шістки
// let filter =cards.filter(value => value.value === 6)
// console.log(filter);
// - всі червоні карти
// let filter =cards.filter(value => value.color === `red`)
// console.log(filter);
// - всі буби
// let filter =cards.filter(value => value.cardSuit === `diamonds`)
// console.log(filter);
// - всі трефи від 9 та більше
// let filter =cards.filter(value => value.cardSuit === `spades` && value.value > 8 || typeof value.value === 'string' &&
// value.cardSuit === 'spades' || value.value === 'Joker' && value.color === 'black')
// console.log(filter);
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'clubs', value: 'Ace', color: 'black'},
    {cardSuit: 'clubs', value: 2, color: 'black'},
    {cardSuit: 'clubs', value: 3, color: 'black'},
    {cardSuit: 'clubs', value: 4, color: 'black'},
    {cardSuit: 'clubs', value: 5, color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'Jack', color: 'black'},
    {cardSuit: 'clubs', value: 'Queen', color: 'black'},
    {cardSuit: 'clubs', value: 'King', color: 'black'},

    {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
    {cardSuit: 'diamonds', value: 2, color: 'red'},
    {cardSuit: 'diamonds', value: 3, color: 'red'},
    {cardSuit: 'diamonds', value: 4, color: 'red'},
    {cardSuit: 'diamonds', value: 5, color: 'red'},
    {cardSuit: 'diamonds', value: 6, color: 'red'},
    {cardSuit: 'diamonds', value: 7, color: 'red'},
    {cardSuit: 'diamonds', value: 8, color: 'red'},
    {cardSuit: 'diamonds', value: 9, color: 'red'},
    {cardSuit: 'diamonds', value: 10, color: 'red'},
    {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'King', color: 'red'},

    {cardSuit: 'hearts', value: 'Ace', color: 'red'},
    {cardSuit: 'hearts', value: 2, color: 'red'},
    {cardSuit: 'hearts', value: 3, color: 'red'},
    {cardSuit: 'hearts', value: 4, color: 'red'},
    {cardSuit: 'hearts', value: 5, color: 'red'},
    {cardSuit: 'hearts', value: 6, color: 'red'},
    {cardSuit: 'hearts', value: 7, color: 'red'},
    {cardSuit: 'hearts', value: 8, color: 'red'},
    {cardSuit: 'hearts', value: 9, color: 'red'},
    {cardSuit: 'hearts', value: 10, color: 'red'},
    {cardSuit: 'hearts', value: 'Jack', color: 'red'},
    {cardSuit: 'hearts', value: 'Queen', color: 'red'},
    {cardSuit: 'hearts', value: 'King', color: 'red'},
    {value: 'Joker', color: 'red'},

    {cardSuit: 'spades', value: 'Ace', color: 'black'},
    {cardSuit: 'spades', value: 2, color: 'black'},
    {cardSuit: 'spades', value: 3, color: 'black'},
    {cardSuit: 'spades', value: 4, color: 'black'},
    {cardSuit: 'spades', value: 5, color: 'black'},
    {cardSuit: 'spades', value: 6, color: 'black'},
    {cardSuit: 'spades', value: 7, color: 'black'},
    {cardSuit: 'spades', value: 8, color: 'black'},
    {cardSuit: 'spades', value: 9, color: 'black'},
    {cardSuit: 'spades', value: 10, color: 'black'},
    {cardSuit: 'spades', value: 'Jack', color: 'black'},
    {cardSuit: 'spades', value: 'Queen', color: 'black'},
    {cardSuit: 'spades', value: 'King', color: 'black'},
    {value: 'Joker', color: 'black'},

];

cards.reduce((accum, cards) => {
if (cards.cardSuit === `spades`){

  accum.spades.push(cards);

}else if (cards.cardSuit === `diamonds`){

    accum.diamond .push(cards);

}else if (cards.cardSuit === `clubs`){

    accum.clubs.push(cards);

}else if (cards.cardSuit === `hearts`) {

    accum.hearts.push(cards);
}else {
accum.Joker.push(cards)






}
return accum

    {
    spades:[],

   diamonds:[],

    hearts:[],

    clubs:[]

    Joker:[]




    };


    }
);
console.log(reduce);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// };
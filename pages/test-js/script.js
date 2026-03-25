// // if

// let score = 5;

// if (score == 1){
//     score = "⭐";
// } else {
//     score = "none";
// }

// console.log(score);

// // switch

// let score = 3;

// switch (score) {
//     case 1:
//         score = '⭐';
//         break;
//     case 2:
//         score = '⭐⭐';
//         break;
//     case 3:
//         score = '⭐⭐⭐';
//         break;
//     case 4:
//         score = '⭐⭐⭐⭐';
//         break;
//     case 5:
//         score = '⭐⭐⭐⭐⭐';
//         break;
//     default:
//         score = 'N/A';
// }

// console.log(score)

// // ___________________________________

// let score = 5;

// switch (true) { 
//     case score <= 2:
//         score = "⭐";
//         break;
//     case score <= 4:
//         score = "⭐⭐";
//         break;
//     case score <= 6:
//         score = "⭐⭐⭐";
//         break;
//     case score <= 8:
//         score = "⭐⭐⭐⭐";
//         break;
//     case score <= 10:
//         score = "⭐⭐⭐⭐⭐";
//         break;
//     default:
//         score = "N/A";
// }

// console.log(score);

// // ___________________________________

// let score = 5;

// switch (score) {
//     case 1:
//         score = "★";
//         break;
//     case 1.5:
//         score = "★⯨";
//         break;
//     case 2:
//         score = "★★";
//         break;
//     case 2.5:
//         score = "★★⯨";
//         break;
//     case 3:
//         score = "★★★";
//         break;
//     case 3.5:
//         score = "★★★⯨";
//         break;
//     case 4:
//         score = "★★★★";
//         break;
//     case 4.5:
//         score = "★★★★⯨";
//         break;
//     case 5:
//         score = "★★★★★";
//         break;
//     default:
//         score = "N/A";
// }

// console.log(score);







// // function ----------------------------------

// function showMovies(name, rating){
//     console.log(`${name}: ${rating}`)
// }
// showMovies("The Wire", 9.1)



// // function return ---------------------------

// function showMovies(name, rating){
//     const infoMovie = `${name}: ${rating}`
//     return infoMovie;
// }
// console.log(showMovies("Modern Times", 8.5))
// alert(showMovies("Dead Poets Society", 8.1))



// // arrow function -----------------------------

// const showMovies = (name, rating) => {
//     return `${name}: ${rating}`;
// }
// console.log(showMovies("Marriage Story", 7.9))



// // صدا کردن تابع در تابع دیگه----------------------------------

// function calculateAge(birthYear){
//     const age = 2026 - birthYear;
//     return age;
// }

// function calculateExcessFat(weight, height){
//     const excessFat = height - (weight + 100);
//     return excessFat;
// }

// function fitness(myBirthYear, myWeight, myHeight){
//     const ageFn = calculateAge(myBirthYear)
//     const fatFn = calculateExcessFat(myWeight, myHeight)

//     const result = `Age: ${ageFn}
//     Fat Control: ${fatFn}kg`
//     return result;
// }

// console.log(fitness(2000, 65, 160))



// // Array ---------------------------------------------

// const searchEngine = ['Google', 'Yandex', 'Bing']

// console.log(searchEngine)
// console.log(searchEngine[1])
// console.log(searchEngine.length)
// console.log(searchEngine.toString())
// console.log(searchEngine.join(" - "))
// console.log(searchEngine.pop()) //remove last array
// console.log(searchEngine.push("Zarebin")) // add end
// console.log(searchEngine.shift()) // remove first
// console.log(searchEngine.unshift("Opera")) // add first
// searchEngine[1] = "Gerdo" // replase
// console.log(searchEngine) // // slice  sort reverse

// const os = ['Windows', 'Linox', 'Mac']

// const mix = [1999, os, 'book', searchEngine]

// console.log(searchEngine.concat(os)) // mix or new arayy??



// // Object ---------------------------------

// const movie = {
//     name: "The Lord of The Rings",
//     length: "201 min",
//     score: 9.0,
//     genre: ['Adventure', 'Drama', 'Fantasy'],
//     rating: function(){
//         let star = `⭐⭐⭐⭐ (${this.score})`;
//         return star
//     }
// }

// console.log(movie)
// console.log(movie.name)
// console.log(movie['name'])
// console.log(movie.genre[1])
// console.log(movie.rating())
// console.log(Object.values(movie))
// console.log(Object.keys(movie))



// // For Loop -------------------





// // For + if -------------------

// const scores = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
// const symbols = ["★", "★⯨", "★★", "★★⯨", "★★★", "★★★⯨", "★★★★", "★★★★⯨", "★★★★★⯨"];

// let rating = 2;

// for (let i = 0; i < scores.length; i++) {
//     if (rating === scores[i]) {
//         rating = symbols[i];
//         break;
//     }
// }

// console.log(rating)



// // DOM -------------------------------------------------------------

// // select_____________________

// const result = document.getElementById('heading')
// const result = document.getElementsByClassName('container')
// const result = document.getElementsByTagName('article')
// const result = document.querySelector('.container')  // فقط اولین مورد رو که پیدا کنه میگیره
// const result = document.querySelectorAll('.container') // همه موارد رو میگیره

// console.log(result);

// // ________________________________
// const myList = document.getElementById('my-list');
// console.log(myList.innerHTML);
// console.log(myList.innerText);
// console.log(myList.textContent);

// console.log(myList.children);
// console.log(myList.firstElementChild);
// console.log(myList.lastElementChild);

// // __________________________________________
// const viliam = document.getElementById('viliam')
// console.log(viliam.previousElementSibling);
// console.log(viliam.nextElementSibling);





// // add new list________________________

// const addNewList = document.createElement('li'); // ایجاد لیست جدید
// addNewList.innerText = 'قمار باز (داستایوفسکی)'; // محتوای داخل تگ
// addNewList.setAttribute('class', 'list-items'); // اضافه کردن استایل

// const myList = document.getElementById('my-list'); // سلکت کردن لیست
// myList.append(addNewList); 


// // add new row____________________________

// const newRow = document.createElement('tr') // ایجاد ردیف جدید

// const cell1 = document.createElement('td') // ایجاد سلول
// cell1.textContent = 'سوسن'
// newRow.appendChild(cell1)

// const cell2 = document.createElement('td')
// cell2.textContent = '28'
// newRow.appendChild(cell2)

// const cell3 = document.createElement('td')
// cell3.textContent = 'کاشان'
// newRow.appendChild(cell3)

// const myTable = document.querySelector('tbody') // انتخاب جدول
// myTable.appendChild(newRow) // اضافه کردن


// // Event Listener

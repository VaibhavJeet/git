let title = document.getElementById('main-header');
title.style.borderBottom = '2px solid black';

//Using Query Selector
//let additem = document.querySelector('.title');
// additem.style.fontWeight = 'bold';
// additem.style.color = 'green';

//Using Class Name
let additem = document.getElementsByClassName('title');
//Using Index Number
// additem[0].style.fontWeight = 'bold';
// additem[0].style.color = 'green';

//Using Loop
// for(let i = 0; i < additem.length; i++) {
//     additem[i].style.fontWeight = 'bold';
//     additem[i].style.color = 'green';
// }

//Converting to array
// Array.from(additem).forEach(element => {
//     element.style.fontWeight = 'bold';
//     element.style.color = 'green';
// });
//OR
// [...additem].forEach(element => {
//     element.style.fontWeight = 'bold';
//     element.style.color = 'green';
// });

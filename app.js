/* 'use strict' - reduz erros silenciosos, melhora o desempenho, 
   fornece mais avisos e menos recursos não seguros.*/
'use strict';

console.log('Here\'s a hidden message');

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

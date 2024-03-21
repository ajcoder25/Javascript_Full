// Change the bg color to red

// document.body.style.background = "red";

// setTimeout(() => document.body.style.background = "", 1000);


// Change it back after 1 sec

// document.querySelector()

document.body.style.background = 'red';

setTimeout(() =>document.body.style.background = '',3000);



// We can change it by query selector


// console.log(document.querySelector('h1'));
// console.log(docuement.querySelector('#app-title'))
// console.log(document.querySelector('.contaniner'));
// console.log(document.querySelector(''));


// // getting element by tagName


// // document.getElementsByTagName('Tagname')


// const allTitles = document.getElementsByTagName('h1');

// console.log(allTitles);
// console.log(allTitles.length);


// // to print all the element 

// for(let i = 0; i< allTitles.length; i++){
//     console.log(allTitles[i])
// }

// document.body.innerHTML = '<h1> Hello World</h1>'

// document.write('hello from js')



const main = document.getElementById('main');
main.innerHTML = '<h1> Hello From main ,</h1>';

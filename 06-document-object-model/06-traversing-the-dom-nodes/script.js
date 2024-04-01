// const changeFirst = document.querySelector('#first')

// changeFirst.style.color = 'red'
// changeFirst.style.backgroundColor = "yellow"
// changeFirst.style.fontSize = '24px'
// changeFirst.style.border = "2px solid red"


// //Exercise- 2

// const changeAll = document.querySelectorAll('div')

// changeAll.forEach((check,i) =>{
//     if(i % 2 === 0){
//         check.style.color = 'red'
//     }
//     else{
//         check.style.color = 'green'
//     }
// });


//Exercise- 3

const changeText = document.querySelectorAll('p');
changeText[0].id = 'first'
changeText.textContent = "He is Learning DOM"

console.log(changeText);






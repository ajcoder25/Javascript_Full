const FirstPara = document.getElementsByTagName('p');

console.log('checkP:', FirstPara[0].textContent)


// Q-2


const selectingId = document.querySelector('#first.textContent')

console.log('First Id:', selectingId);


//Q-3, Q-4


const selectingAll = document.querySelectorAll('p');

for(let i = 0; i < selectingAll.length; i++){
 console.log(selectingAll[i])

}



// Q-5  changing the text 


// const changing = document.querySelector('#fourth')

// changing.textContent = 'You can do it '



// Q-6

// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(paragraph => {
//   paragraph.id = 'uniqueId-' + Math.random();
//   paragraph.classList.add('commonClass');
// });



// Set Id and class Attribute

// const change = document.querySelectorAll('p')
//     change[0].setAttribute('class', 'title')
//     change[0].setAttribute('id','New-title')


/// adding attribute

// const changeNew = document.querySelectorAll('p')
//     changeNew[0].id = 'title'
//     changeNew[1].className = 'New'


//     //



//Excercise: Level 2


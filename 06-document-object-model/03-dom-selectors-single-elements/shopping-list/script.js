//document.getElementById()

// console.log(document.getElementById('app-title').getAttribute('id'));


// CHanging the id 


// console.log(document.getElementById('app-title').id = 'new-id')


// You can set the atribute

// document.getElementById('app-title').setAttribute('class','title');


const check = document.getElementById('app-title')
 console.log(document.getElementById('app-title').innerHTML = '<strong> Shopping List </strong>');



// change the style

check.style.color = 'red'
check.style.padding = '40px'



// document.querySelector()

console.log(document.querySelector('h1'))


const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerHTML = 'Apple Juice';
secondItem.style.color = 'Orange'

// const thirdItem = document.querySelector('li:nth-child(3)');

// thirdItem.innerHTML ='Contact with Ajay';
// thirdItem.style.color = 'red';

const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li')

const thirdItem = document.querySelector('li:nth-child(3)');

thirdItem.style.backgroundColor = 'Red';



const listItems = document.querySelectorAll('.items li');

listItems[1].style.color = 'red';

listItems.forEach((item) =>{
    item.style.color = 'red';
})


const clearBtn = document.querySelector('.btn-clear')

clearBtn.style.backgroundColor ='blue'
clearBtn.style.color= "white"





let output;


const parent = document.querySelector('.parent')

// TO acess the children, you always have to use the children 
output = parent.children;

// to acess the children 

output= parent.children[1]

// to acess the content of the child 

output = parent.children[1].innerText;

// to acess the class Name 

output = parent.children[2].className

// to acess the nodeList(means Tag)

output = parent.children[0].nodeName

// to change the content of the child 

output = parent.children[1].innerText = 'Ajay is Great'
output = parent.children[1].style.color = 'red'


//TO acess the first element of the parent 


output = parent.firstElementChild.innerText = 'Ajay is millionarie'

// to acess the last element of the parent 

output = parent.lastElementChild.innerText = 'you can do it '


// TO acess the parent element using the child

const child = document.querySelector('.child');

output = child.parentElement;

output = child.parentElement.style.border = '1px solid red'
output = child.parentElement.style.padding = '10px'



// How to acess the sibling

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;


// will make the next of the child 2nd Color red 
output = secondItem.nextElementSibling;


output = secondItem.nextElementSibling.style.color = 'red'

// change the previous sibling color 

output = secondItem.previousElementSibling.style.backgroundColor = 'Blue'
output = secondItem.previousElementSibling.style.color = 'white'








console.log(output);

/* Note: in properties we don't use the parenthesis()
*/

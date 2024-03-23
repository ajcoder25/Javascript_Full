const div = document.createElement('div');

// to add the class Name to it and other thing 

div.className = 'my-element'
div.id = 'my-id'

div.setAttribute('title', 'Ajay you can do it')



const text = document.createTextNode('Hello World');
div.appendChild(text);




// You can append as child in your UL also 

document.querySelector('ul').appendChild(div);
console.log(div)

//I want to add it 

const add = document.querySelector('.items')
      add.innerHTML('nth')



// uderstand behind the scene what it does

/*
Sure thing! Let's break it down step by step:

1. `const text = document.createTextNode('Hello World');`: This line creates a new text node with the content "Hello World". Think of a text node as a piece of text content, like a sentence or a word.

2. `div.appendChild(text);`: This line adds the newly created text node as a child of the `div` element. So, if `div` is an HTML element, it now has "Hello World" as its child content.

3. `console.log(div)`: This line simply logs (prints) the `div` element to the console, so you can see the result.

Putting it all together:

You're creating a text node with the content "Hello World", then you're adding that text node as a child of the `div` element. Finally, you're logging the `div` element to the console to see the changes. 
So, after running this code, you'll see the `div` element in the console with "Hello World" as its child content.



*/












//What is append Method

/*Imagine you have a list of tasks written on sticky notes, and you want to add another task to the list. The appendChild method in the DOM is like sticking a new sticky note onto the end of your list.

// Step 1: Find the parent element
const parentElement = document.getElementById('myList');

// Step 2: Create the new element
const newElement = document.createElement('li');
newElement.textContent = 'New Task';

// Step 3: Stick it on
parentElement.appendChild(newElement);

*/

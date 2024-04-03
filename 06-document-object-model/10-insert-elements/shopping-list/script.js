// insertAdjacentElement Example


function insertElement(){
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example

// insertAdjacentHTML example

// insertBefore Example

insertElement();





function newInsert(){
  // step 1st - select the class 

  const  container = document.querySelector('.container')
  
  //step 2nd: Will create the new element above the class container
  const h1 = document.createElement('h1')
  
  // step3rd: 

  h1.textContent = 'Ajay you can do it '

  // step 4th: write down where you want to  see change it see the text in it 

  container.insertAdjacentElement('afterEnd', h1)
  
}



//Problem i want to add the text in the list Item 


function addText(){
    
  const select = document.querySelector('li:first-child');
   select.insertAdjacentText('beforeend', 'you can call me');
}


addText();
newInsert();








/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

// //Quick & dirty 

// // function CreateListItem(item){
// //       const li = document.createElement('li')

// //       li.innerHTML = `${item}<button class="remove-item btn-link text-red">
// //       <i class="fa-solid fa-xmark"></i>
// //     </button>`;
// //     document.querySelector('.items').appendChild(li);
// // }





// // step -1st Creating the list item

// function createListItem(item){

//       const li = document.createElement('li')

//       //Step 2nd  Adding content to the list 

//       li.innerHTML = `${item}<button class="remove-item btn-link text-red">
//              <i class="fa-solid fa-xmark"></i>
//            </button>`;

// // Step 3

// document.querySelector('.items').appendChild(li)
// }


// //Clean & performant way


// function createNewItem(item){

//   // step 1st: to create the list item
//   const li = document.createElement('li');

//   //step 1.1 
    
//   li.appendChild(document.createTextNode(item));



//   // step2nd - will create the button 
   
//   const button  = document.querySelector('button')

//   // step 2.1 Now will create the classes
//   button.className = "remove-item btn-link text-red";
//   // step 3 we also want icon so we set that 

//   const icon = document.createElement('i')

//   // step 3.1 

//   icon.className = 'fa-solid fa-xmark'

//   button.appendChild(icon);
//   li.appendChild(button);
//   document.querySelector('.items').appendChild(li);




// }

// createListItem('Egg')
// createNewItem('cheese')





// step 1 

const node = document.createElement('li');


// Step 2 

const textNode = document.textNode('water')

// step 3rd

node.appendChild('textNode')

//Step 4

const add = document.querySelector('#myList').appendChild(node);
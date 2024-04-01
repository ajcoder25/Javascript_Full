//Quick & dirty 

// function CreateListItem(item){
//       const li = document.createElement('li')

//       li.innerHTML = `${item}<button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//     document.querySelector('.items').appendChild(li);
// }





// step -1st Creating the list item

function createListItem(item){

      const li = document.createElement('li')

      //Step 2nd  Adding content to the list 

      li.innerHTML = `${item}<button class="remove-item btn-link text-red">
             <i class="fa-solid fa-xmark"></i>
           </button>`;

// Step 3

document.querySelector('.items').appendChild(li)
}


createListItem('Egg')
createNew

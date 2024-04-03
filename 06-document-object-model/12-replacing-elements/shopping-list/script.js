//How to replace the item 

function replaceFirstItem(){

    // Step-1st  slected 
    const firstItem = document.querySelector('li:first-child');

    // createNewELement

    //Step 2nd

    const li = document.createElement('li');
    li.textContent = 'Cheese';

    // step 3rd - Replace with 

    firstItem.replaceWith(li);
    
}

replaceFirstItem();



// Trying to replace 2nd with Banana


function replaceBananna(){
    const secondItem = document.querySelector('ul#item-list.items li:nth-child(2)');

    const li = document.createElement('li')
    li.innerHTML = 'Banana'

    secondItem.replaceWith(li);
}

replaceBananna();
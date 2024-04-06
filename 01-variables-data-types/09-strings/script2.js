// How to use the onclick event listener







//Double click event listener



const card = document.querySelector('.card')

// card.addEventListener('click',function(){
//     console.log('my Name is Ajay')
// })


// when I click on + it should create the new div


const container = document.querySelector('.container')

card.addEventListener('click',function(){

    //problem: first will create the class then append to parent to get the same styling as of parent

    //step 1st : created a new Element
    const newCard = document.createElement('div')

    // step 2nd 

    newCard.classList.add('card')

    
    // step3rd append to parent 

  

     
    

    container.append(newCard);

    

     
   

})
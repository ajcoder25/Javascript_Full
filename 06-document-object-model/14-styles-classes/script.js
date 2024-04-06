const text = document.querySelector('p');

const itemList = document.querySelector('.item-list');

const items = itemList.querySelectorAll('li')


function run(){
   //className 

   console.log(itemList.className);
   text.className = 'card dark';
}

document.querySelector('button').onclick = run;



//Change the style

items.forEach((item,index) =>{


    item.style.color = 'red'
})


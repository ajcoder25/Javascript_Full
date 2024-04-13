const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

window.addEventListener('click',(e) =>{
    console.log('1. window event listener')
},true)


document.body.addEventListener('click',(e) =>{
    console.log('2. document event listener')
},true)



green.addEventListener('click',(e) =>{
    e.stopPropagation()
    console.log('3. Green event listener')
},true)


pink.addEventListener('click',(e) =>{
    console.log('4. pink event listener')
},true)


blue.addEventListener('click',(e) =>{
    
    console.log('5. blue event listener')
},true)


// Event bubbling - when we add the  event in child , it will call his parent parent event with itself
// example- if i click on blue, it will show its parent link pink event and green event in the console

// TO stop the propogation 
// whereever you put propogation it will not go after its buble of its parent 
// for example- if i write the stop propagation in green, it will not go beyond green when I click 
//    on blue event

//********************************** */

//use caputure-- When it is use it gets consoled the first parent 


// once: true-- it will only work one time only after that it will not work
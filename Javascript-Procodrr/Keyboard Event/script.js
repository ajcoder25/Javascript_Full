// const h1 = document.querySelector('h1')
// const input = document.querySelector('input')

// input.addEventListener('keypress',(e) =>{
// console.log('e code: ', e.code)
// console.log('e value :', e.key);
// })


// input.addEventListener('keyup',(e) =>{
//     console.log('e code: ', e.code)
//     console.log('e value :', e.key);
//     })


    
// input.addEventListener('keydown',(e) =>{
//     console.log('e code: ', e.code)
//     console.log('e value :', e.key);
//     })


const h1 = document.querySelector('h1')
const addCardButton = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

card.addEventListener('mouseleave', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
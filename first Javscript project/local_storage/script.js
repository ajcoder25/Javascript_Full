const nameElement = document.querySelector('.name-tag')

changeName.innerHTML = localStorage.Ajay

const nameInput  = document.querySelector('.name')

const ageInput  = document.querySelector('.age')
const ageElement = document.querySelector('.age-tag')


// nameInput.addEventListener('input',(e) =>{
//     localStorage.checkName = e.target.value;
//     nameElement.innerText = localStorage.checkName
// })


// ageElement.innerText = localStorage.getItem('myAge')

// ageInput.addEventListener('input',(e) =>{
//     localStorage.setItem('myName', e.target.value);
//     ageElement.innerText = localStorage.getItem('myAge')
// })



const myData = {
    name:'',
    age:'',
}


nameInput.addEventListener('input',(e) =>{
    myData.name = e.target.value

    localStorage.setItem('myData', myData)
})
const usernameInput = document.querySelector('#username');
const para = document.querySelector('p')
const form = document.querySelector('form')

// usernameInput.addEventListener('dblclick', () => {
//     console.log('input double clicked');
// });




//Input event ---- whatever you write it will show on the console
//You can put anything instead of e

//
// usernameInput.addEventListener('input',(e) =>{
//     console.log(e.target.value)
//     para.innerText = e.target.value
    
// })


//****************** */


//Change event: it gets printed as come out of the input box
// focus & blur : 
// focus: when you click on input, it is called focus
 //  blur : outside of the input box



// usernameInput.addEventListener('focus', (e) =>{
//     console.log(e)
//     para.innerText = e.target.value
// })

form.addEventListener('click',(e)=>{
    console.log('you have submit your form')
})
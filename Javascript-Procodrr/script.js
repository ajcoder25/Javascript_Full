const usernameInput = document.querySelector('#username');

usernameInput.addEventListener('dblclick', () => {
    console.log('input double clicked');
});




//Input event 
//You can put anything instead of e

usernameInput.addEventListener('input',(e) =>{
    console.log(e.target.value)
    console.log('input event fired')
})
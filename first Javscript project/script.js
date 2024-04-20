const checkBoxList = document.querySelectorAll('.custom-checkbox')



//story: We iterate through all the item to get what are those in checkbox
checkBoxList.forEach((checkbox) =>{
    checkbox.addEventListener('click',(e) =>{
     checkbox.parentElement.classList.toggle('Completed')
    })
});
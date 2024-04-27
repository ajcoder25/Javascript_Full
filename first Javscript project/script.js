const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('error-label')
const progressBar = document.querySelector('.progress-bar')

// will select the progress bar to make it work

const progressValue = document.querySelector('.progress-value')



// goal is to in local storage creating the object of the all goals

// We can't create the goal object by hard coded so, we will create the empty object

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}







//story: We iterate through all the item to get what are those in checkbox
checkBoxList.forEach((checkbox) =>{
    checkbox.addEventListener('click',(e) =>{


        // //story -- created the array & iterate over every element of input and returnning
        //   the value
        const allGoalsAdded= [...inputFields].every(function (input){
           console.log(input.value)
           return input.value
        })

        if(allGoalsAdded){
            checkbox.parentElement.classList.toggle('Completed')
            progressValue.style.width = '33.3%';
            const inputId = checkbox.nextElementSibling.id
            allGoals[inputId].completed = !allGoals[inputId].completed
            localStorage.setItem('allGoals', JSON.stringify(allGoals));
            
        }
        else{

            progressBar.classList.add('show-error')
        // you can also do 
        // errorLabel.style.display = 'block'
        //It doesn't consider good practice try not follow it instead 
        // do the changes in css Only


        }
     
    })
});

//Will try to use the focus event when user start to write it should stop showing the error
inputFields.forEach((input) =>{
 input.value = allGoals[input.id].name

 if(allGoals[input.id].completed){
    input.parentElement.classList.add()
 }

 })

    input.addEventListener('focus', (e) =>{
        progressBar.classList.remove('show-error')
    })

    // As we enter the input in any of these it will print on the console
    // you can check where event is occured using the console.log(e.target)
    input.addEventListener('input', (e) =>{
        allGoals[input.id] = {
                       name: input.value,
                       completed : false,
        }
    
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
    })




//Now, building it until user didn't enter the three goal, it should not work
 
//1 select the input field
//2 Select the input field
// [...inputFields].every(funtion(input) {
//     return input.value
// })




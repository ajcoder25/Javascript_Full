// Question - 1st 

// function getCelsius(F){
//    const celsius =  (F - 32) * 5 / 9

//    return `User wants to convert ${F} to ${celsius.toFixed(2)}\xB0C`
// }


// console.log(getCelsius(100))


// Question - 2nd 

// const minMax= (number) =>{
     
//     const min = Math.min(...number);
//     const max = Math.max(...number);

//     return{min, max};
// }


// const checkNumber = [1,2,3,4,5,6,7,8,9]
// const result = minMax(checkNumber);

// console.log(result)



// const minMax = (number) =>{
//     const min = Math.min(...number);
//     const max = Math.max(...number);
//     return {min, max};

// }

// const check = [1,2,3,4,50,100,120]
// const result = minMax(check)
// console.log(result);

// // question 3 

// ((length, breath) =>{
//     const area = length * breath;
//     const output = `The area of rectangle with the length ${length} and a width of ${breath} is  ${area}`;
//     console.log(output);
// })(10,5);


//question
// ((number) =>{
//     const min = Math.min(...number)
//     const max = Math.max(...number)
//     console.log(`The smallest number is ${min} and highest number is ${max}`)
    
    
// })([1,2,3,4,5,6,7])



// // function defination 
// function introduceMe(){
    
//     console.log('hi');
    
//     console.log('I am web developer')
//     console.log('my name is Ajay yadav')

//     return 'Try hard'
// }

//                     //function call
// const returnValue = introduceMe();


// Creating the function that Geeting changed by the 



// function changeName (Name){
//      console.log(Name)
// }

// changeName('Ajay')

// function add(number1, number2){
//      console.log(number1+number2)
// }

// add(2, 5)


// Creating the function


// function introduceMe(username){
//     console.log('hi,');
//     console.log(`My name is ${username} `)
//     console.log('I am a web Developer')

// }


// introduceMe('pooja');


// introduceMe('Abhimanyu')

// You can give the default parameter 

// function changeAddress(name ='Ajay'){
//     console.log(`${name}`)
// }


// changeAddress()


// we can also set the default value in a function


// Learning to setting the 2 parameter 

// function introduceMe(person,proffesion, years){
//     console.log('Hi!')
//     console.log(`My name is ${person}`)
//     console.log(`By the way I'm workng as  ${proffesion} `)

//     console.log(`I'm ${years}`)
// }

// introduceMe('Ajay', 'Mechanical Engineer', 25)// this is the arugument


// console.log('****************************************')

// introduceMe('pooja', 'software Develper', 28)




/// Return


// function add(number1, number2){
//     return number1+ number2
// }

// debugger
// const check1 = add(2,4);
// console.log(check1);


//substract

function substract (num1, num2){
    return num1 + num2
}


const total = substract(substract(4,6), substract(8,12))
console.log(total)

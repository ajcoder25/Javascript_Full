const age = 13;


// Using the if statment 

if(age>18){
     console.log('You can vote')
}

else{
     console.log("You can't vote")
}


// Using the trenary operator


age>= 18 ? console.log('You can vote always'): console.log('Please wait until you become 18')



// Assiging a condtional value to a variable


// const check = 17;


// const canVote = check >=18 ? true : false

// console.log(canVote);

// how to use the multiple statement



// let redirect;


// if(auth){
//      alert('You have succesfully logged in ')
//      redirect ='/dashbord';
// }
// else{
//      alert('Acess denied')
//      redirect = '/failed'
// }

// console.log(redirect);


// build the same program using trenary operator


// const redirect = auth ? (alert('Welcome to the dashboard'), '/dashbord') : (alert('Acess Denied'), '/Login');
// console.log(redirect);


// we can use create the trenary without else mentioning the else statement 

const auth = true;

const redirect = auth ? (alert('Welcome to dashbord'),'/Logged in ') : null;

console.log(redirect);

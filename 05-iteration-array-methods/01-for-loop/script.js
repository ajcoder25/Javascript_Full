// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax



// for (let i = 0; i <= 20; i++) {
//     if (i === 7) {
//         console.log('7 is my lucky number');
//     } else {
//         console.log('Number ' + i);
//     }
// }



// Nested Loop 


// for (let i =0; i <=10; i++){

//     console.log('Number'+ i);

//     for(let j = 1; j <= 5; j++){
//         console.log(`${i} * ${j} = ${i * j}`);

//     }
// }


// Lets do for 20 to 30 


// for (let i = 20; i <=30; i++){
//     console.log('Number' + i)

//     for(let k = 1; k <=10; k++){
//         console.log(`${i} * ${k} = ${i * k}`)
//     }
// }


// Loop through an Array


const names = ['Brad', 'Sam', 'Sara','John' , 'Tim'];

for(let i = 0; i < names.length; i++){
    if(names[i]==='Sara'){
        console.log('She is my favorite')
    }
    else{
        console.log(names[i]);
    }
}


// Break and continue

for (let i = 0 ; i <= 20 ; i ++){
    if (i === 15){
    console.log('breaking');
   break;
    }
    console.log(i);
}

// continue


for(let i = 0 ; i <= 20; i++){
    if( i === 13){
        console.log('Skiping 13th floor')
        continue;
    }

    console.log(i)
}
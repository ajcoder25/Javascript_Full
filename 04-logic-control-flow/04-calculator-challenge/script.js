// function calculator(num1, num2, operator){
    
//     if(operator ==='+'){
//         return num1 + num2
// }

// else if (operator ==='-'){
//     return num1 - num2
// }
// else if (operator ==='*'){

//     return num1*num2
// }
// else if (operator ==='/'){
//     return num1/num2
// }

// else{
//     return "This doesn't exit! please try again"
// }
    
// }




// // Addition 

// console.log(calculator(5,2, '+'));

// //substraction

// console.log(calculator(5,2, '-'));

// //Multiplication

// console.log(calculator(5,2,'*'));

// //Division

// console.log(calculator(5,2, '&'));

// Switch Statment 

function calculator(num1, num2, operator){
    let result;

    switch(operator){
        case '+':
           return num1+num2;
           break;

      case '-':
      return num1-num2
      break;

      case '*':
        return num1 * num2
        break;

     case '/':
          result = num1/num2;
          break;

    default:
        result = 'Invalid operator';


       
      
    }

    console.log(result);
    return result;
}



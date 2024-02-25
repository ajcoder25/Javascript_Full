// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
// # Capitalize Challenge

// **Instructions**:

// Take the variable `myString` and capitalize the first letter of the word using some of the methods that we talked about in the last video. Put the result in a variable called `myNewString`.

// Create multiple solutions if you would like.

// **Expected Result:**

// ```JavaScript
// const myString = 'developer';

// console.log(myNewString); // 'Developer'



//solution

/*const myString = 'developer';


let myNewString;

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);


console.log(myNewString)

*/


//2nd way 


/*let myString = 'developer';

let myNewString;

myNewString = myString[0].toUpperCase() + myString.slice(1);

console.log(myNewString);

*/


//3rd Way-- solve it by template literal

let myString = 'developer';

let myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`

console.log(myNewString);







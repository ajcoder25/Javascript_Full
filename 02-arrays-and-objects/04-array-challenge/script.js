
// Question 1st
const arr = [1,2,3,4,5]


 arr.unshift(0) 
 arr.push(6);

 x = arr.reverse();

 console.log(x);

 // Question- 2

 const arr1 = [1,2,3,4,5];
 const arr2 = [5,6,7,8,9,10];

// const arr3 = arr1.slice(0,4).concat(arr2);

// console.log(arr3);




//2nd way 


// const arr4 = [...arr1,...arr2]

// arr4.splice[0,4]

// console.log(arr4)

const arr4 = [...arr1, ...arr2]
arr4.splice(4,1)

console.log(arr4);





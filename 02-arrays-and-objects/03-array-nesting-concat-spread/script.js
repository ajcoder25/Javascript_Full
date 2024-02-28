
let x;


const fruit = ['apple', 'pear','orange']

const berries = ['strawberry', 'blueberry', 'rasberry'];


// fruit.push(berries)




// How I acess the nested array
// x = fruit[3][1]


// I want to add the fruit and beriies in array 

const allFruit = [fruit, berries]

x = allFruit[1][2]

//after combining it and want to acess an array 

// concate the array 

x = fruit.concat(berries);


//spread operator (...) you can concat it by using the spread operator



x = [...fruit,...berries]


console.log(x);

//flatten Array 

const arr = [1,2,3, [5,6], [6,7], [8,9]]


//Static Mehtod on Array object 

// x = Array.isArray('hello');
// x = Array.from('12345');



// x = arr.flat();
// console.log(x);

const a = 1;
const b = 2;
const c = 3;


x = Array.of(a,b,c);

console.log(x);
